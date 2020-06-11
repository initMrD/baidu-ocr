import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var BaiduOcr = /** @class */ (function (_super) {
    __extends(BaiduOcr, _super);
    function BaiduOcr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaiduOcr.prototype.init = function (success,error) { return cordova(this, "init", { "sync": true }, arguments); };
    BaiduOcr.prototype.destroy = function (success,error) { return cordova(this, "destroy", { "sync": true }, arguments); };
    BaiduOcr.prototype.scan = function (params,success,error) { return cordova(this, "scan", { "sync": true }, arguments); };
    BaiduOcr.pluginName = "BaiduOcr";
    BaiduOcr.plugin = "cordova-plugin-baidu-ocr";
    BaiduOcr.pluginRef = "BaiduOcr";
    BaiduOcr.install = "cordova plugin add https://github.com/initMrD/cordova-plugin-baidu-ocr";
    BaiduOcr.repo = "https://github.com/initMrD/cordova-plugin-baidu-ocr";
    BaiduOcr.platforms = ["Android", "iOS"];
    BaiduOcr = __decorate([
        Injectable()
    ], BaiduOcr);
    return BaiduOcr;
}(IonicNativePlugin));
export { BaiduOcr };