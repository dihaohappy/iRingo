import _ from './ENV/Lodash.mjs'
import $Storage from './ENV/$Storage.mjs'
import ENV from "./ENV/ENV.mjs";
import URI from "./URI/URI.mjs";
import XML from "./XML/XML.mjs";

import Database from "./database/index.mjs";
import setENV from "./function/setENV.mjs";

const $ = new ENV(" iRingo: 📍 Location v3.1.6(1) response");

/***************** Processing *****************/
// 解构URL
const URL = URI.parse($request.url);
$.log(`⚠ ${$.name}`, `URL: ${JSON.stringify(URL)}`, "");
// 获取连接参数
const METHOD = $request.method, HOST = URL.host, PATH = URL.path, PATHs = URL.paths;
$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, "");
// 解析格式
const FORMAT = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
$.log(`⚠ ${$.name}`, `FORMAT: ${FORMAT}`, "");
(async () => {
	const { Settings, Caches, Configs } = setENV($, "iRingo", "Location", Database);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
			// 创建空数据
			let body = {};
			// 格式判断
			switch (FORMAT) {
				case undefined: // 视为无body
					break;
				case "application/x-www-form-urlencoded":
				case "text/plain":
				default:
					switch (HOST) {
						case "gspe1-ssl.ls.apple.com":
							switch (PATH) {
								case "pep/gcc":
									await setGCC("pep", Caches);
									switch (Settings.PEP.GCC) {
										case "AUTO":
											break;
										default:
											$response.body = Settings.PEP.GCC;
											break;
									};
									break;
							};
							break;
					};
					break;
				case "application/x-mpegURL":
				case "application/x-mpegurl":
				case "application/vnd.apple.mpegurl":
				case "audio/mpegurl":
					break;
				case "text/xml":
				case "text/html":
				case "text/plist":
				case "application/xml":
				case "application/plist":
				case "application/x-plist":
					body = XML.parse($response.body);
					// 主机判断
					switch (HOST) {
						case "configuration.ls.apple.com":
							// 路径判断
							switch (PATH) {
								case "config/defaults":
									const PLIST = body.plist;
									if (PLIST) {
										// set settings
										// CN
										PLIST["com.apple.GEO"].CountryProviders.CN.ShouldEnableLagunaBeach = Settings?.Config?.Defaults?.LagunaBeach ?? true; // XX
										PLIST["com.apple.GEO"].CountryProviders.CN.DrivingMultiWaypointRoutesEnabled = Settings?.Config?.Defaults?.DrivingMultiWaypointRoutesEnabled ?? true; // 驾驶导航途径点
										PLIST["com.apple.GEO"].CountryProviders.CN.GEOAddressCorrectionEnabled = Settings?.Config?.Defaults?.GEOAddressCorrection ?? true; // CN
										if (Settings?.Config?.Defaults?.LookupMaxParametersCount ?? true) {
											delete PLIST["com.apple.GEO"].CountryProviders.CN.GEOBatchSpatialEventLookupMaxParametersCount // CN
											delete PLIST["com.apple.GEO"].CountryProviders.CN.GEOBatchSpatialPlaceLookupMaxParametersCount // CN
										}
										PLIST["com.apple.GEO"].CountryProviders.CN.LocalitiesAndLandmarksSupported = Settings?.Config?.Defaults?.LocalitiesAndLandmarks ?? true; // CN
										PLIST["com.apple.GEO"].CountryProviders.CN.POIBusynessDifferentialPrivacy = Settings?.Config?.Defaults?.POIBusyness ?? true; // CN
										PLIST["com.apple.GEO"].CountryProviders.CN.POIBusynessRealTime = Settings?.Config?.Defaults?.POIBusyness ?? true; // CN
										PLIST["com.apple.GEO"].CountryProviders.CN.TransitPayEnabled = Settings?.Config?.Defaults?.TransitPayEnabled ?? true; // CN
										PLIST["com.apple.GEO"].CountryProviders.CN.SupportsOffline = Settings?.Config?.Defaults?.SupportsOffline ?? true; // CN
										PLIST["com.apple.GEO"].CountryProviders.CN.SupportsCarIntegration = Settings?.Config?.Defaults?.SupportsCarIntegration ?? true; // CN
										// US
										PLIST["com.apple.GEO"].CountryProviders.CN["6694982d2b14e95815e44e970235e230"] = Settings?.Config?.Defaults?.["6694982d2b14e95815e44e970235e230"] ?? true; // US
										PLIST["com.apple.GEO"].CountryProviders.CN.PedestrianAREnabled = Settings?.Config?.Defaults?.PedestrianAR ?? true; // 现实世界中的线路
										PLIST["com.apple.GEO"].CountryProviders.CN.OpticalHeadingEnabled = Settings?.Config?.Defaults?.OpticalHeading ?? true; // 举起以查看
										PLIST["com.apple.GEO"].CountryProviders.CN.UseCLPedestrianMapMatchedLocations = Settings?.Config?.Defaults?.UseCLPedestrianMapMatchedLocations ?? true; // 导航准确性-增强
									};
									break;
							};
							break;
					};
					$response.body = XML.stringify(body);
					break;
				case "text/vtt":
				case "application/vtt":
					break;
				case "text/json":
				case "application/json":
					break;
				case "application/protobuf":
				case "application/x-protobuf":
				case "application/vnd.google.protobuf":
				case "application/grpc":
				case "application/grpc+proto":
				case "application/octet-stream":
					break;
			};
			break;
		case false:
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done($response))

/***************** Function *****************/
/**
 * Set GCC
 * @author VirgilClyne
 * @param {String} name - Config Name
 * @param {Object} caches - Caches
 * @return {Promise<*>}
 */
async function setGCC(name, caches) {
	$.log(`⚠ ${$.name}, Set GCC`, `caches.${name}.gcc = ${caches?.[name]?.gcc}`, "");
	if ($response.body !== caches?.[name]?.gcc) {
		let newCaches = caches;
		newCaches[name] = { "gcc": $response.body };
		$Storage.setItem("@iRingo.Location.Caches", newCaches);
	}
	return $.log(`🎉 ${$.name}, Set GCC`, `caches.${name}.gcc = ${caches?.[name]?.gcc}`, "");
};