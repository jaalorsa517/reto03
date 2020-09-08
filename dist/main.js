/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "79257c71ccda4b1e1386";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/images/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./scripts/main.js")(__webpack_require__.s = "./scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/icon-calculator.svg":
/*!************************************!*\
  !*** ./images/icon-calculator.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzQ3NEY1NCIgZD0iTTY0IDB2NDEuMjVsLTMuNzUgMy44NzVIMy43NUwwIDQxLjI1VjB6Ii8+PHBhdGggZmlsbD0iIzMyMzkzRiIgZD0iTTY0IDB2NDEuMjVsLTMuNzUgMy44NzVIMzJWMHoiLz48cGF0aCBmaWxsPSIjREFEQUU1IiBkPSJNMjIuNjI1IDUwLjg3NWgxOC43NXYxMS4yNWgtMTguNzV6Ii8+PHBhdGggZmlsbD0iI0M5QzlEMyIgZD0iTTMyIDUwLjg3NWg5LjM3NXYxMS4yNUgzMnoiLz48cGF0aCBmaWxsPSIjRUZFRkY0IiBkPSJNMCA0MS4yNWg2NHYxMS41SDB6Ii8+PHBhdGggZmlsbD0iI0RBREFFNSIgZD0iTTMyIDQxLjI1aDMydjExLjVIMzJ6Ii8+PHBhdGggZmlsbD0iI0VGRUZGNCIgZD0iTTE1LjEyNSA2MC4yNWgzMy43NVY2NGgtMzMuNzV6Ii8+PHBhdGggZmlsbD0iI0RBREFFNSIgZD0iTTMyIDYwLjI1aDE2Ljg3NVY2NEgzMnoiLz48cGF0aCBmaWxsPSIjNTQ5RUYyIiBkPSJNMjAuNzUgNy41Yy03LjIzNiAwLTEzLjEyNSA1Ljg4OS0xMy4xMjUgMTMuMTI1UzEzLjUxNCAzMy43NSAyMC43NSAzMy43NXMxMy4xMjUtNS44ODkgMTMuMTI1LTEzLjEyNVMyNy45ODYgNy41IDIwLjc1IDcuNXptMCAxOC43NWE1LjYzMSA1LjYzMSAwIDAxLTUuNjI1LTUuNjI1QTUuNjMxIDUuNjMxIDAgMDEyMC43NSAxNWE1LjYzMSA1LjYzMSAwIDAxNS42MjUgNS42MjUgNS42MzEgNS42MzEgMCAwMS01LjYyNSA1LjYyNXoiLz48ZyBmaWxsPSIjMzc3RkQyIj48cGF0aCBkPSJNNDUuMTI1IDcuNUg1Ni41djMuNzVINDUuMTI1ek0zNy42MjUgNy41aDMuNzV2My43NWgtMy43NXpNNDUuMTI1IDIyLjVINTYuNXYzLjc1SDQ1LjEyNXpNMzcuNjI1IDIyLjVoMy43NXYzLjc1aC0zLjc1ek0zNy42MjUgMTVINTYuNXYzLjc1SDM3LjYyNXpNMzcuNjI1IDMwSDU2LjV2My43NUgzNy42MjV6Ii8+PC9nPjwvZz48L3N2Zz4=\");\n\n//# sourceURL=webpack:///./images/icon-calculator.svg?");

/***/ }),

/***/ "./images/icon-karma.svg":
/*!*******************************!*\
  !*** ./images/icon-karma.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzY3NkU3NCIgZD0iTTI2LjM3NSA1Mi42MjVoMTEuMjVWNjRoLTExLjI1eiIvPjxwYXRoIGZpbGw9IiMzMzM2MzciIGQ9Ik0zMiA1Mi42MjVoNS42MjVWNjRIMzJ6Ii8+PHBhdGggZmlsbD0iIzRDNTQ1QSIgZD0iTTIyLjYyNSA0N2gxOC43NXY5LjM3NWgtMTguNzV6Ii8+PHBhdGggZmlsbD0iIzUyNTg1QyIgZD0iTTMyIDQ3aDkuMzc1djkuMzc1SDMyeiIvPjxwYXRoIGZpbGw9IiNGRkRBMkQiIGQ9Ik00NS4wMTIgMzYuNzI1Yy0yLjMyNSAxLjkxMy0zLjYzNyA0LjYxMi0zLjYzNyA3LjQyNVY0N2gtMTguNzV2LTIuODVjMC0yLjg1LTEuMjM4LTUuNTEyLTMuMy03LjEyNS01LjA2Mi0zLjkzOC03Ljk1LTkuODYyLTcuOTUtMTYuMjc1YTIwLjU4NSAyMC41ODUgMCAwMTcuNjEzLTE2LjAxM0MyMi43IDEuNzM3IDI3LjIzOCAwIDMyIDBjMS40NjIgMCAyLjk2Mi4xNSA0LjQyNS40NSA4LjEgMS42ODggMTQuNDc1IDguNDUgMTUuOSAxNi42NjMgMS4yNzUgNy41LTEuNDI1IDE0Ljg1LTcuMzEzIDE5LjYxMnoiLz48cGF0aCBmaWxsPSIjRkRCRjAwIiBkPSJNNDUuMDEyIDM2LjcyNWMtMi4zMjUgMS45MTMtMy42MzcgNC42MTItMy42MzcgNy40MjVWNDdIMzJWMGMxLjQ2MiAwIDIuOTYyLjE1IDQuNDI1LjQ1IDguMSAxLjY4OCAxNC40NzUgOC40NSAxNS45IDE2LjY2MyAxLjI3NSA3LjUtMS40MjUgMTQuODUtNy4zMTMgMTkuNjEyeiIvPjxwYXRoIGZpbGw9IiM2NzZFNzQiIGQ9Ik0xOC44NzUgNDUuMTI1aDI2LjI1djMuNzVoLTI2LjI1eiIvPjxwYXRoIGZpbGw9IiNGRjkxMDAiIGQ9Ik0zOS45NTYgMTAuMTQzbDIuNjUxIDIuNjUxLTMuOTc5IDMuOTc4LTIuNjUxLTIuNjUxeiIvPjxwYXRoIGZpbGw9IiNGREJGMDAiIGQ9Ik0yNS4zNzIgMjQuNzI3bDIuNjUxIDIuNjUxLTMuOTc5IDMuOTc5LTIuNjUxLTIuNjUxek0zMC4xMjUgMjguMjVoMy43NXY1LjYyNWgtMy43NXoiLz48cGF0aCBmaWxsPSIjRkY5MTAwIiBkPSJNMzguNjI4IDI0LjcyN2wzLjk3OSAzLjk3OS0yLjY1MSAyLjY1MS0zLjk3OS0zLjk3OXpNMzkuNSAxOC44NzVoNS42MjV2My43NUgzOS41eiIvPjxwYXRoIGZpbGw9IiNGREJGMDAiIGQ9Ik0yNC4wNDQgMTAuMTQzbDMuOTc5IDMuOTc5LTIuNjUxIDIuNjUtMy45NzktMy45Nzh6TTE4Ljg3NSAxOC44NzVIMjQuNXYzLjc1aC01LjYyNXpNMzAuMTI1IDcuNjI1aDMuNzV2NS42MjVoLTMuNzV6Ii8+PGcgZmlsbD0iI0ZGREEyRCI+PHBhdGggZD0iTTAgMTguODc1aDcuNjI1djMuNzVIMHpNNi41ODUgMTQuODFsLTUuNzUtMy43NSAyLjA4LTMuMTIgNS43NSAzLjc1ek0yLjkxNSAzMy41NmwtMi4wOC0zLjEyIDUuNzUtMy43NSAyLjA4IDMuMTJ6Ii8+PC9nPjxwYXRoIGZpbGw9IiNGREJGMDAiIGQ9Ik01Ni4zNzUgMTguODc1SDY0djMuNzVoLTcuNjI1ek02MS4wODUgMzMuNTZsLTUuNzUtMy43NSAyLjA4LTMuMTIgNS43NSAzLjc1ek01Ny40MTUgMTQuODFsLTIuMDgtMy4xMiA1Ljc1LTMuNzUgMi4wOCAzLjEyeiIvPjxwYXRoIGZpbGw9IiNGRjkxMDAiIGQ9Ik0zMiA3LjYyNWgxLjg3NXY1LjYyNUgzMnpNMzIgMjguMjVoMS44NzV2NS42MjVIMzJ6Ii8+PHBhdGggZmlsbD0iIzMzMzYzNyIgZD0iTTMyIDQ1LjEyNWgxMy4xMjV2My43NUgzMnoiLz48cGF0aCBmaWxsPSIjRkRCRjAwIiBkPSJNMzIgMTEuMzc1Yy01LjE3NSAwLTkuMzc1IDQuMi05LjM3NSA5LjM3NXM0LjIgOS4zNzUgOS4zNzUgOS4zNzUgOS4zNzUtNC4yIDkuMzc1LTkuMzc1LTQuMi05LjM3NS05LjM3NS05LjM3NXoiLz48cGF0aCBmaWxsPSIjRkY5MTAwIiBkPSJNMzIgMzAuMTI1di0xOC43NWM1LjE3NSAwIDkuMzc1IDQuMiA5LjM3NSA5LjM3NXMtNC4yIDkuMzc1LTkuMzc1IDkuMzc1eiIvPjxwYXRoIGZpbGw9IiNGRkRBMkQiIGQ9Ik0zMC4xMjUgMTguODc1aDMuNzV2My43NWgtMy43NXoiLz48cGF0aCBmaWxsPSIjRkRCRjAwIiBkPSJNMzIgMTguODc1aDEuODc1djMuNzVIMzJ6Ii8+PC9nPjwvc3ZnPg==\");\n\n//# sourceURL=webpack:///./images/icon-karma.svg?");

/***/ }),

/***/ "./images/icon-supervisor.svg":
/*!************************************!*\
  !*** ./images/icon-supervisor.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzY3NkU3NCIgZD0iTTU2Ljg0MiA3LjE1OGMtOS41MjYtOS41NjMtMjQuOTAyLTkuNTI1LTM0LjQyOCAwLTguMDI1IDguMDI2LTkuNDUgMjAuNDQtMy41MjUgMzAuMDAzbC0yLjUxMyAyLjU1LTEuMzU2IDYuMTQ0IDQuMjE0IDQuMjE0IDUuMDkzLTIuNDA4IDIuNTEyLTIuNTVhMjQuMjU0IDI0LjI1NCAwIDAwMzAuMDAzLTMuNTI1YzkuNTYzLTkuNTI2IDkuNTI1LTI0LjkwMiAwLTM0LjQyOHoiLz48cGF0aCBmaWxsPSIjNDc0RjU0IiBkPSJNMjQuMzI3IDQ3LjY2MWwyLjUxMi0yLjU1YTI0LjI1NCAyNC4yNTQgMCAwMDMwLjAwMy0zLjUyNWM5LjU2My05LjUyNiA5LjUyNS0yNC45MDIgMC0zNC40MjhsLTQwLjI2IDQwLjI2IDIuNjUyIDIuNjUxIDUuMDkzLTIuNDA4eiIvPjxwYXRoIGZpbGw9IiM2NEUxREMiIGQ9Ik01NC4yMTMgOS43ODdhMjAuNTYgMjAuNTYgMCAwMC0xNC41ODUtNi4wNDFDMjguMjM2IDMuNzQ2IDE5IDEyLjk4IDE5IDI0LjM3MmEyMC41NjQgMjAuNTY0IDAgMDA2LjA0MSAxNC41ODYgMjAuNTY0IDIwLjU2NCAwIDAwMTQuNTg2IDYuMDRjMTEuMzkyIDAgMjAuNjI2LTkuMjM0IDIwLjYyNi0yMC42MjZhMjAuNTYgMjAuNTYgMCAwMC02LjA0MS0xNC41ODV6Ii8+PHBhdGggZmlsbD0iIzAwQzhDOCIgZD0iTTYwLjI1NCAyNC4zNzJhMjAuNTYgMjAuNTYgMCAwMC02LjA0MS0xNC41ODVsLTI5LjE3IDI5LjE3QTIwLjU2NCAyMC41NjQgMCAwMDM5LjYyNyA0NWMxMS4zOTIgMCAyMC42MjYtOS4yMzUgMjAuNjI2LTIwLjYyN3oiLz48cGF0aCBmaWxsPSIjRUZFRkY0IiBkPSJNNTYuMjM5IDIzLjQxYy0uMTg0LS4zMDctMi45OC00LjkxNC03LjI4MS04LjM2OC0yLjYzLTIuMTEzLTUuODIyLTMuNzk2LTkuMzMtMy43OTYtOS4yNDIgMC0xNi4zMTQgMTEuNjY5LTE2LjYxIDEyLjE2NWwtLjU3Ni45NjEuNTc1Ljk2MWMuMTg0LjMwOSAyLjk4IDQuOTE2IDcuMjggOC4zNyAyLjYzMSAyLjExMiA1LjgyMyAzLjc5NSA5LjMzIDMuNzk1IDkuMjQzIDAgMTYuMzE1LTExLjY2OCAxNi42MTItMTIuMTY1bC41NzQtLjk2LS41NzQtLjk2MnoiLz48cGF0aCBmaWxsPSIjREFEQUU1IiBkPSJNNTYuMjM5IDI1LjMzM2wuNTc0LS45Ni0uNTc0LS45NjJjLS4xODQtLjMwOC0yLjk4LTQuOTE1LTcuMjgxLTguMzY5bC0xOC42NiAxOC42NmMyLjYzIDIuMTEzIDUuODIyIDMuNzk2IDkuMzMgMy43OTYgOS4yNDIgMCAxNi4zMTQtMTEuNjY4IDE2LjYxLTEyLjE2NXoiLz48cGF0aCBmaWxsPSIjNjRFMURDIiBkPSJNNDMuNjA0IDIwLjM5NmE1LjYwNyA1LjYwNyAwIDAwLTMuOTc2LTEuNjUgNS42MzIgNS42MzIgMCAwMC01LjYyNiA1LjYyNmMwIDEuNTUxLjYzMSAyLjk1OCAxLjY1IDMuOTc2YTUuNjA5IDUuNjA5IDAgMDAzLjk3NiAxLjY1IDUuNjMyIDUuNjMyIDAgMDA1LjYyNS01LjYyNmMwLTEuNTUtLjYzLTIuOTU3LTEuNjQ5LTMuOTc2eiIvPjxwYXRoIGZpbGw9IiMwMEM4QzgiIGQ9Ik00NS4yNTMgMjQuMzcyYzAtMS41NS0uNjMtMi45NTctMS42NDktMy45NzZsLTcuOTUyIDcuOTUyYTUuNjA4IDUuNjA4IDAgMDAzLjk3NiAxLjY1IDUuNjMyIDUuNjMyIDAgMDA1LjYyNS01LjYyNnoiLz48cGF0aCBmaWxsPSIjNjc2RTc0IiBkPSJNNDAuOTU0IDIzLjA0NmExLjg3NiAxLjg3NiAwIDEwLTEuMzI2IDMuMiAxLjg3NiAxLjg3NiAwIDAwMS4zMjYtMy4yeiIvPjxwYXRoIGZpbGw9IiM0NzRGNTQiIGQ9Ik00MS41MDMgMjQuMzcyYzAtLjUxNy0uMjEtLjk4Ni0uNTUtMS4zMjZsLTIuNjUgMi42NTJhMS44NzYgMS44NzYgMCAwMDMuMi0xLjMyNnoiLz48cGF0aCBmaWxsPSIjNTc1QzYwIiBkPSJNMjAuMzMzIDQzLjY2N2wtMy45NTctMy45NTdMMCA1Ni4wNDlsMy45NzUgMy45NzZMNy45NTEgNjRsMTYuMzc2LTE2LjMzOXoiLz48cGF0aCBmaWxsPSIjMzMzNjM3IiBkPSJNMjQuMzI3IDQ3LjY2MWwtMy45OTQtMy45OTRMMy45NzUgNjAuMDI1IDcuOTUxIDY0eiIvPjwvZz48L3N2Zz4=\");\n\n//# sourceURL=webpack:///./images/icon-supervisor.svg?");

/***/ }),

/***/ "./images/icon-team-builder.svg":
/*!**************************************!*\
  !*** ./images/icon-team-builder.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0VGRUZGNCIgZD0iTTY0IDE0LjQ1NHY0MS43ODhIMFYxNC40NTRsMy43NS0zLjc4N2g1Ni41eiIvPjxwYXRoIGZpbGw9IiNEQURBRTUiIGQ9Ik02NCAxNC40NTR2NDEuNzg4SDMyVjEwLjY2N2gyOC4yNXoiLz48cGF0aCBmaWxsPSIjNDc0RjU0IiBkPSJNMCAwaDY0djE1LjUxNUgweiIvPjxwYXRoIGZpbGw9IiMzMjM5M0YiIGQ9Ik0zMiAwaDMydjE1LjUxNUgzMnoiLz48ZyBmaWxsPSIjRkY2MzdCIj48cGF0aCBkPSJNNy43NTggNS44MThoMy42ODV2My44NzlINy43NTh6TTE1LjEyOCA1LjgxOGgzLjY4NXYzLjg3OWgtMy42ODV6TTIyLjQ5NyA1LjgxOGgzLjY4NXYzLjg3OWgtMy42ODV6Ii8+PC9nPjxwYXRoIGZpbGw9IiNGRjYzN0IiIGQ9Ik00NS41NzYgNDIuMjQ1VjY0SDM0LjM1NXYtMy43MWgtMy43NFY2NEgxOS4zOTRWNDIuMjQ1bDExLjM3LTkuMjc1aDMuMTA1eiIvPjxwYXRoIGZpbGw9IiNEQURBRTUiIGQ9Ik0xMS42MzYgMjIuMzAzaDQxLjY5N3YzLjg3OUgxMS42MzZ6Ii8+PHBhdGggZmlsbD0iI0M5QzlEMyIgZD0iTTMyIDIyLjMwM2gyMC4zNjR2My44NzlIMzJ6Ii8+PHBhdGggZmlsbD0iI0U2Mzk1MCIgZD0iTTQ1LjU3NiA0Mi4yNDVWNjRIMzMuOTM5di0zLjcxSDMyVjMyLjk3aDEuNDM1eiIvPjxwYXRoIGZpbGw9IiNFRkVGRjQiIGQ9Ik0zMC4wNjEgNDUuNTc2aDMuODc4djMuODc5aC0zLjg3OHoiLz48cGF0aCBmaWxsPSIjREFEQUU1IiBkPSJNMzIgNDUuNTc2aDEuOTM5djMuODc5SDMyeiIvPjxwYXRoIGZpbGw9IiM2NzZFNzQiIGQ9Ik01MC40MjQgNDUuNzc5bC0yLjQ1MiAyLjcwNi0xNS40ODctMTMuNTI2LTE1LjQ4OCAxMy41MjYtMi40NTItMi43MDYgMTcuOTQtMTUuNzE4eiIvPjxwYXRoIGZpbGw9IiM0NzRGNTQiIGQ9Ik0zMiAzMC4wNjFsMTguNDI0IDE1LjcxOC0yLjUxOCAyLjcwNkwzMiAzNC45NTl6Ii8+PC9nPjwvc3ZnPg==\");\n\n//# sourceURL=webpack:///./images/icon-team-builder.svg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/main.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/main.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_icon_supervisor_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon-supervisor.svg */ \"./images/icon-supervisor.svg\");\n/* harmony import */ var _images_icon_team_builder_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon-team-builder.svg */ \"./images/icon-team-builder.svg\");\n/* harmony import */ var _images_icon_karma_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icon-karma.svg */ \"./images/icon-karma.svg\");\n/* harmony import */ var _images_icon_calculator_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icon-calculator.svg */ \"./images/icon-calculator.svg\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_icon_supervisor_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_icon_team_builder_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_icon_karma_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_icon_calculator_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".attribution {\\n  font-size: 11px;\\n  text-align: center;\\n}\\n.attribution a {\\n  color: #3e52a3;\\n}\\n.title-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-top: 40px;\\n}\\n.title-container .title {\\n  font-size: 1.5rem;\\n  margin: 0px 0 10px 0;\\n}\\n.title-container .title.title-single {\\n  font-weight: 200;\\n  margin: 0;\\n}\\n.title-container p {\\n  margin: 10px 25px 40px 40px;\\n  font-weight: 200;\\n}\\n.card-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  margin-bottom: 30px;\\n  width: 300px;\\n  height: 200px;\\n  border-radius: 5px;\\n  position: relative;\\n  background-color: #fafafa;\\n}\\n.card-container .card-title {\\n  font-weight: 600;\\n  margin: 20px 0px 5px 20px;\\n}\\n.card-container .card-parraf {\\n  margin: 5px 25px 5px 20px;\\n  font-size: 0.8rem;\\n}\\n.card-container .card-icon {\\n  width: 64px;\\n  height: 64px;\\n  background-repeat: no-repeat;\\n  background-size: 100% 100%;\\n  margin: 5px 20px 10px 0px;\\n}\\n.card-container.supervisor {\\n  border-top: 5px solid #45d3d3;\\n  box-shadow: 5px 5px 10px #a3a5ae;\\n}\\n.card-container.supervisor .card-icon {\\n  position: absolute;\\n  right: 10px;\\n  bottom: 10px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n.card-container.team-builder {\\n  border-top: 5px solid #ea5353;\\n  box-shadow: 5px 5px 10px #a3a5ae;\\n}\\n.card-container.team-builder .card-icon {\\n  position: absolute;\\n  right: 10px;\\n  bottom: 10px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n.card-container.karma {\\n  border-top: 5px solid #fcaf4a;\\n  box-shadow: 5px 5px 10px #a3a5ae;\\n}\\n.card-container.karma .card-icon {\\n  position: absolute;\\n  right: 10px;\\n  bottom: 10px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n.card-container.calculator {\\n  border-top: 5px solid #549ef2;\\n  box-shadow: 5px 5px 10px #a3a5ae;\\n}\\n.card-container.calculator .card-icon {\\n  position: absolute;\\n  right: 10px;\\n  bottom: 10px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n@media screen and (min-width: 1279px) {\\n  .cards-container {\\n    width: 100%;\\n    height: 100%;\\n    display: grid;\\n    grid-template-rows: repeat(4, 1fr);\\n    grid-template-columns: repeat(3, 1fr);\\n  }\\n  .cards-container .card-container.supervisor {\\n    grid-column: 1/2;\\n    grid-row: 2/4;\\n  }\\n  .cards-container .card-container.team-builder {\\n    grid-column: 2/3;\\n    grid-row: 1/3;\\n  }\\n  .cards-container .card-container.karma {\\n    grid-column: 2/3;\\n    grid-row: 3/5;\\n  }\\n  .cards-container .card-container.calculator {\\n    grid-column: 3/4;\\n    grid-row: 2/4;\\n  }\\n}\\nbody {\\n  margin: 0;\\n  font-size: 15px;\\n  font-family: 'Poppins';\\n  color: #4c4e61;\\n  background-color: #fafafa;\\n}\\nbody .main-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_icon_calculator_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icon-calculator.svg */ \"./images/icon-calculator.svg\");\n/* harmony import */ var _images_icon_karma_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon-karma.svg */ \"./images/icon-karma.svg\");\n/* harmony import */ var _images_icon_supervisor_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon-supervisor.svg */ \"./images/icon-supervisor.svg\");\n/* harmony import */ var _images_icon_team_builder_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon-team-builder.svg */ \"./images/icon-team-builder.svg\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n// const style = require('../styles/main.css');\n\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/main.css\",\n      function () {\n        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/main.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ })

/******/ });