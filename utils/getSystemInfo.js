// 获取系统信息，顶部导航位置大小信息等

let getSystem = () => {
    const systemInfo = wx.getSystemInfoSync(),
        menu = wx.getMenuButtonBoundingClientRect();

    let formatStyle = (areaInfo) => {
        let styles = []
        for (let key in areaInfo) {
            if (areaInfo[key] == 0) {
                styles.push(`${key}:0;`)
            } else {
                styles.push(`${key}:${areaInfo[key]}px;`)
            }
        }
        return styles.join('')
    }

    let getScreenStyle = () => {
        return {
            width: systemInfo.screenWidth,
            height: systemInfo.screenHeight,
            left: 0,
            top: 0,
        }
    }

    let getWidowStyle = () => {
        return {
            width: systemInfo.windowWidth,
            height: systemInfo.windowHeight,
            left: 0,
            top: 0,
        }
    }

    let getStatusBarStyle = () => {
        return {
            width: systemInfo.windowWidth,
            height: systemInfo.statusBarHeight,
            left: 0,
            top: 0,
        }
    }

    let getMenuButtonStyle = () => {
        return {
            top: menu.top,
            left: menu.left,
            width: menu.width,
            height: menu.height
        }
    }

    let getNavigationBarStyle = () => {
        let menuButton = getMenuButtonStyle(),
            statusBar = getStatusBarStyle();
        return {
            width: systemInfo.windowWidth,
            height: 2 * (menuButton.top - statusBar.height) + menuButton.height,
            left: 0,
            top: statusBar.height
        }
    }


    let getNavigationBarDetail = () => {
        let menuButton = getMenuButtonStyle(),
            statusBar = getStatusBarStyle();
        let left = systemInfo.windowWidth - menuButton.left - menuButton.width;
        let center = systemInfo.windowWidth - 4 * left - 2 * menuButton.width;
        let top = menuButton.top - statusBar.height;
        return {
            left: left,
            menuWidth: menuButton.width,
            center: center,
            top: top
        }
    }

    let getContentHeight = (type) => {
        let height = type==='safe'?systemInfo.safeArea.bottom:systemInfo.screenHeight,
            statusBarHeight = systemInfo.statusBarHeight,
            contentHeight = 0;
        let navigationBarStyle = getNavigationBarStyle();
        contentHeight = height - statusBarHeight - navigationBarStyle.height;
        return contentHeight;
    }
    return {
        screenStyle: formatStyle(getScreenStyle()),
        widowStyle: formatStyle(getWidowStyle()),
        statusBarStyle: formatStyle(getStatusBarStyle()),
        menuButtonStyle: formatStyle(getMenuButtonStyle()),
        navigationBarStyle: formatStyle(getNavigationBarStyle()),
        statusBar: getNavigationBarDetail(),
        systemInfo: systemInfo,
        menu: menu,
        iosBottomBarHeight:getContentHeight()-getContentHeight('safe'),
        contentHeight: getContentHeight(),
        safeContentHeight: getContentHeight('safe'),
        navigationHeight: getNavigationBarStyle().height,
        statusBarHeight: getStatusBarStyle().height,
        headerHeight:getNavigationBarStyle().height+getStatusBarStyle().height
    };
}

let system = getSystem()


export default system
