const IS_DEBUG = true;

if (IS_DEBUG) {
    import('vconsole').then((VConsoleModule) => {
        new VConsoleModule.default();
    })
}