const args:Array<string> = process.argv.slice(2);

args.length == 0 && (() => {
	console.error("请输入执行命令！\n");
	process.exit(1);
})();

const className = args[0].charAt(0).toUpperCase() + args[0].slice(1);
let ControllerClass = null;
try {
	import(`./command/${className}`).then((module) => {
		ControllerClass = module.default;
		new ControllerClass(args.slice(1));
	});
}catch(error) {
	console.error(`无法加载${className}\n`,error);
	process.exit(1);
}