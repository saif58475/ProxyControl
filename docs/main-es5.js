(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    27874:
    /*!***************************************************!*\
      !*** ./src/app/Interceptors/error.interceptor.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorInterceptor": function ErrorInterceptor() {
          return (
            /* binding */
            _ErrorInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      49344);

      var _ErrorInterceptor = /*#__PURE__*/function () {
        function _ErrorInterceptor(router, toastr) {
          _classCallCheck(this, _ErrorInterceptor);

          this.router = router;
          this.toastr = toastr;
        }

        _createClass(_ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            return next.handle(req).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              if (error) {
                switch (error.status) {
                  case 400:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      icon: "error",
                      title: " ",
                      text: error.error.message
                    });
                    break;

                  case 401:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      icon: "error",
                      title: "خطاء في تعديل البيانات ",
                      text: error.error.message
                    });
                    break;

                  case 500:
                    var navigationExtras = {
                      state: {
                        error: error.error
                      }
                    };
                    break;

                  default:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      icon: "error",
                      title: "خطاء ",
                      text: 'something unexpected happened'
                    });
                    break;
                }
              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }));
          }
        }]);

        return _ErrorInterceptor;
      }();

      _ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || _ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
      };

      _ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ErrorInterceptor,
        factory: _ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/components/layout/content/content.component */
      14649);
      /* harmony import */


      var _shared_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/routes/routes */
      46382);
      /* harmony import */


      var _shared_guard_is_not_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/guard/is-not-login.guard */
      31762);
      /* harmony import */


      var _shared_Models_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/Models/login/login.component */
      86022);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716); // login


      var routes = [{
        path: "",
        component: _shared_Models_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        canActivate: [_shared_guard_is_not_login_guard__WEBPACK_IMPORTED_MODULE_2__.IsNotLoginGuard],
        children: _shared_routes_routes__WEBPACK_IMPORTED_MODULE_1__.content
      }, {
        path: "content",
        component: _shared_components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent,
        canActivate: [_shared_guard_is_not_login_guard__WEBPACK_IMPORTED_MODULE_2__.IsNotLoginGuard],
        children: _shared_routes_routes__WEBPACK_IMPORTED_MODULE_1__.content
      } // {
      //   path: '**',
      //   redirectTo: ''
      // }
      ];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
          anchorScrolling: "enabled",
          scrollPositionRestoration: "enabled",
          relativeLinkResolution: "legacy"
        })]], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      65792);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      57057);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-loading-bar/core */
      12252);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/components/tap-to-top/tap-to-top.component */
      61916);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent(platformId, loader, translate) {
        _classCallCheck(this, _AppComponent);

        this.platformId = platformId;
        this.loader = loader; // For Progressbar

        this.loaders = this.loader.progress$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.loader.progress$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (v) {
          return v[1];
        }));

        if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
          translate.setDefaultLang("en");
          translate.addLangs(["en", "de", "es", "fr", "pt", "cn", "ae"]);
        }
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 3,
        consts: [[3, "color", "includeSpinner", "height"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-loading-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-tap-to-top");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", "#7366ff")("includeSpinner", false)("height", "4px");
          }
        },
        directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__.LoadingBarComponent, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      32472);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _Interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Interceptors/error.interceptor */
      27874);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-toastr */
      49344);
      /* harmony import */


      var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-loading-bar/http-client */
      45406);
      /* harmony import */


      var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-loading-bar/router */
      47525);
      /* harmony import */


      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-loading-bar/core */
      12252);
      /* harmony import */


      var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./token-interceptor.service */
      68077);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/admin/admin.module */
      81100);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-spinner */
      53945);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-pagination */
      82798);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716); // for HttpClient import:
      // for Router import:
      // for Core import:


      function _HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
      }

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
          useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.TokenInterceptorService,
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
          useClass: _Interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptor,
          multi: true
        }, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
          }
        }), // for HttpClient use:
        _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_16__.LoadingBarHttpClientModule, // for Router use:
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_17__.LoadingBarRouterModule, // for Core use:
        _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_18__.LoadingBarModule, _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_5__.AdminModule, // AgentModuleModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.NgxPaginationModule // LoginGuardService
        ]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, // for HttpClient use:
          _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_16__.LoadingBarHttpClientModule, // for Router use:
          _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_17__.LoadingBarRouterModule, // for Core use:
          _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_18__.LoadingBarModule, _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_5__.AdminModule, // AgentModuleModule,
          ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.NgxPaginationModule]
        });
      })();
      /***/

    },

    /***/
    82363:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/admin/aboutus/insert-aboutus/insert-aboutus.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertAboutusComponent": function InsertAboutusComponent() {
          return (
            /* binding */
            _InsertAboutusComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_API_Service_services_aboutus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/aboutus.service */
      79154);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../images/images */
      96381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function InsertAboutusComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.button);
        }
      }

      function InsertAboutusComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _InsertAboutusComponent = /*#__PURE__*/function () {
        function _InsertAboutusComponent(_AboutusService, _Router, _FormBuilder) {
          _classCallCheck(this, _InsertAboutusComponent);

          this._AboutusService = _AboutusService;
          this._Router = _Router;
          this._FormBuilder = _FormBuilder;
          this.update = false;
          this.button = false;
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_2__.Image;
        }

        _createClass(_InsertAboutusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._AboutusService.Data.subscribe(function (res) {
              if (res != null) {
                _this.aboutus_id = res.about_id;
                _this.imageLogo = _this.img + res.image;

                _this.initiate(res);

                _this.update = true;
              } else {
                _this.initiate();
              }
            });
          }
        }, {
          key: "initiate",
          value: function initiate(record) {
            this.AboutUsForm = this._FormBuilder.group({
              content: [(record === null || record === void 0 ? void 0 : record.content) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              label: [(record === null || record === void 0 ? void 0 : record.label) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              image: [(record === null || record === void 0 ? void 0 : record.image) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.AboutUsForm.controls;
          } // imgFile

        }, {
          key: "getLogoUrl",
          value: function getLogoUrl(event) {
            var _this2 = this;

            var reader = new FileReader();

            if (event.target.files && event.target.files.length) {
              var _event$target$files = _slicedToArray(event.target.files, 1),
                  file = _event$target$files[0];

              this.Image = event.target.files[0];
              reader.readAsDataURL(file);

              reader.onload = function () {
                _this2.imageLogo = reader.result;
              };
            }
          }
        }, {
          key: "insertappenddata",
          value: function insertappenddata() {
            this.AboutUsFormData = new FormData();
            this.AboutUsFormData.append("label", this.AboutUsForm.value.label);
            this.AboutUsFormData.append("content", this.AboutUsForm.value.content);
            this.AboutUsFormData.append("image", this.Image);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.button = true;

            if (this.update == false && this.AboutUsForm.status == "VALID") {
              this.insertappenddata();

              this._AboutusService.Create(this.AboutUsFormData).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: "success",
                  title: "Submitted Successfuly",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this3.AboutUsForm.reset();

                _this3._Router.navigate(['/content/admin/ViewAboutus']);
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.message
                });
                _this3.button = false;
              }, function () {
                console.log('completed');
              });
            } else if (this.update == true && this.AboutUsForm.status == "VALID") {
              this.insertappenddata();

              this._AboutusService.Update(this.AboutUsFormData, this.aboutus_id).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: "success",
                  title: "Submitted Successfuly",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this3.AboutUsForm.reset();

                _this3._Router.navigate(['/content/admin/ViewAboutus']);
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.message
                });
              }, function () {
                console.log('completed');
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Error',
                text: "Please check that all the fields are written"
              });
              this.AboutUsForm.markAllAsTouched();
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._AboutusService.Data.next(null);
          }
        }]);

        return _InsertAboutusComponent;
      }();

      _InsertAboutusComponent.ɵfac = function InsertAboutusComponent_Factory(t) {
        return new (t || _InsertAboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_aboutus_service__WEBPACK_IMPORTED_MODULE_0__.AboutusService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
      };

      _InsertAboutusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InsertAboutusComponent,
        selectors: [["app-insert-aboutus"]],
        decls: 32,
        vars: 14,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "label", "required", "", "placeholder", "label", "containerClass", "", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "content", "required", "", "placeholder", "content", "containerClass", "", 1, "form-control", 3, "tooltip"], [1, "col-6", "my-3"], [1, "image-style", "w-50", "p-2", 3, "src"], ["type", "file", "formControlName", "image", "accept", "image/*", "id", "getLogo", 2, "display", "none", 3, "change"], ["file", ""], ["type", "button", "onclick", "document.getElementById('getLogo').click()", 1, "btn", "btn-primary", "w-50", "d-block"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], ["type", "submit", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", "pull-right"]],
        template: function InsertAboutusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Insert AboutUs");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function InsertAboutusComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InsertAboutusComponent_Template_input_change_25_listener($event) {
              return ctx.getLogoUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " \u0627\u0631\u0641\u0642 \u0635\u0648\u0631\u0629 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, InsertAboutusComponent_ng_template_29_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, InsertAboutusComponent_div_31_Template, 3, 0, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.AboutUsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-valid", ctx.fc.label.valid && ctx.fc.label.touched)("is-invalid", ctx.fc.label.invalid && ctx.fc.label.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", (ctx.fc.label.errors == null ? null : ctx.fc.label.errors.required) ? "this field is required" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-valid", ctx.fc.content.valid && ctx.fc.content.touched)("is-invalid", ctx.fc.content.invalid && ctx.fc.content.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", (ctx.fc.content.errors == null ? null : ctx.fc.content.errors.required) ? "this field is required" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.imageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r1);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    65884:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/admin/aboutus/view-aboutus/view-aboutus.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewAboutusComponent": function ViewAboutusComponent() {
          return (
            /* binding */
            _ViewAboutusComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_API_Service_services_aboutus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/aboutus.service */
      79154);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ViewAboutusComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAboutusComponent_tr_31_Template_button_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3["delete"](item_r1.about_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAboutusComponent_tr_31_Template_button_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.Update(item_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.img + item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var _ViewAboutusComponent = /*#__PURE__*/function () {
        function _ViewAboutusComponent(_AboutusService, _Router) {
          _classCallCheck(this, _ViewAboutusComponent);

          this._AboutusService = _AboutusService;
          this._Router = _Router;
          this.aboutus = [];
        }

        _createClass(_ViewAboutusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.GetAboutUs();
          }
        }, {
          key: "GetAboutUs",
          value: function GetAboutUs() {
            var _this4 = this;

            this._AboutusService.Get().subscribe(function (res) {
              _this4.aboutus = res.data;
            });
          }
        }, {
          key: "Update",
          value: function Update(data) {
            this._Router.navigate(["/content/admin/InsertAboutus"]);

            this._AboutusService.Data.next(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this5._AboutusService.Delete(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "success",
                    title: "Deleted Successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this5.GetAboutUs();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewAboutusComponent;
      }();

      _ViewAboutusComponent.ɵfac = function ViewAboutusComponent_Factory(t) {
        return new (t || _ViewAboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_API_Service_services_aboutus_service__WEBPACK_IMPORTED_MODULE_0__.AboutusService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _ViewAboutusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ViewAboutusComponent,
        selectors: [["app-view-aboutus"]],
        decls: 32,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "col-6", "header-titles"], ["routerLink", "/content/admin/InsertAboutus", 1, "d-block"], ["type", "button", 1, "btn", "btn-primary", "pull-right"], [1, "m-2"], [1, "fa", "fa-plus"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "p-2", 2, "height", "50px", "width", "50px"], [1, "w-100", "rounded-circle", 3, "src"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "red", "padding", "7px", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"]],
        template: function ViewAboutusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0645\u0646 \u0646\u062D\u0646");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0627\u0636\u0627\u0641\u0629 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ViewAboutusComponent_tr_31_Template, 12, 3, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.aboutus);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWFib3V0dXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    18955:
    /*!**********************************************************!*\
      !*** ./src/app/components/admin/admin-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminRoutingModule": function AdminRoutingModule() {
          return (
            /* binding */
            _AdminRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _aboutus_insert_aboutus_insert_aboutus_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./aboutus/insert-aboutus/insert-aboutus.component */
      82363);
      /* harmony import */


      var _aboutus_view_aboutus_view_aboutus_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./aboutus/view-aboutus/view-aboutus.component */
      65884);
      /* harmony import */


      var _service_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/view-service/view-service.component */
      89158);
      /* harmony import */


      var _service_insert_service_insert_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service/insert-service/insert-service.component */
      54816);
      /* harmony import */


      var _detailsofwork_view_detailsofwork_view_detailsofwork_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./detailsofwork/view-detailsofwork/view-detailsofwork.component */
      14386);
      /* harmony import */


      var _detailsofwork_insert_detailsofwork_insert_detailsofwork_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detailsofwork/insert-detailsofwork/insert-detailsofwork.component */
      16993);
      /* harmony import */


      var _listpartner_view_listpartner_view_listpartner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listpartner/view-listpartner/view-listpartner.component */
      54222);
      /* harmony import */


      var _listpartner_insert_listpartner_insert_listpartner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./listpartner/insert-listpartner/insert-listpartner.component */
      92615);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716); // ChangePassword Component


      var routes = [{
        path: "",
        children: [{
          path: "ViewService",
          component: _service_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_2__.ViewServiceComponent
        }, {
          path: "InsertService",
          component: _service_insert_service_insert_service_component__WEBPACK_IMPORTED_MODULE_3__.InsertServiceComponent
        }, {
          path: "ViewAboutus",
          component: _aboutus_view_aboutus_view_aboutus_component__WEBPACK_IMPORTED_MODULE_1__.ViewAboutusComponent
        }, {
          path: "InsertAboutus",
          component: _aboutus_insert_aboutus_insert_aboutus_component__WEBPACK_IMPORTED_MODULE_0__.InsertAboutusComponent
        }, {
          path: "ViewDetailsofwork",
          component: _detailsofwork_view_detailsofwork_view_detailsofwork_component__WEBPACK_IMPORTED_MODULE_4__.ViewDetailsofworkComponent
        }, {
          path: "InsertDetailsofwork",
          component: _detailsofwork_insert_detailsofwork_insert_detailsofwork_component__WEBPACK_IMPORTED_MODULE_5__.InsertDetailsofworkComponent
        }, {
          path: "ViewListPartner",
          component: _listpartner_view_listpartner_view_listpartner_component__WEBPACK_IMPORTED_MODULE_6__.ViewListpartnerComponent
        }, {
          path: "InsertListPartner",
          component: _listpartner_insert_listpartner_insert_listpartner_component__WEBPACK_IMPORTED_MODULE_7__.InsertListpartnerComponent
        }]
      }];

      var _AdminRoutingModule = /*#__PURE__*/_createClass(function _AdminRoutingModule() {
        _classCallCheck(this, _AdminRoutingModule);
      });

      _AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
        return new (t || _AdminRoutingModule)();
      };

      _AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _AdminRoutingModule
      });
      _AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_AdminRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    81100:
    /*!**************************************************!*\
      !*** ./src/app/components/admin/admin.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminModule": function AdminModule() {
          return (
            /* binding */
            _AdminModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-routing.module */
      18955);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var angular_archwizard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular-archwizard */
      72386);
      /* harmony import */


      var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @sweetalert2/ngx-sweetalert2 */
      60845);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      1305);
      /* harmony import */


      var ngx_print_element__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-print-element */
      55894);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-apexcharts */
      46505);
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-pagination */
      82798);
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-cookie-service */
      31584);
      /* harmony import */


      var devexpress_reporting_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! devexpress-reporting-angular */
      3449);
      /* harmony import */


      var _service_insert_service_insert_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/insert-service/insert-service.component */
      54816);
      /* harmony import */


      var _service_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service/view-service/view-service.component */
      89158);
      /* harmony import */


      var _aboutus_view_aboutus_view_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./aboutus/view-aboutus/view-aboutus.component */
      65884);
      /* harmony import */


      var _aboutus_insert_aboutus_insert_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./aboutus/insert-aboutus/insert-aboutus.component */
      82363);
      /* harmony import */


      var _detailsofwork_view_detailsofwork_view_detailsofwork_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detailsofwork/view-detailsofwork/view-detailsofwork.component */
      14386);
      /* harmony import */


      var _detailsofwork_insert_detailsofwork_insert_detailsofwork_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./detailsofwork/insert-detailsofwork/insert-detailsofwork.component */
      16993);
      /* harmony import */


      var _listpartner_view_listpartner_view_listpartner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./listpartner/view-listpartner/view-listpartner.component */
      54222);
      /* harmony import */


      var _listpartner_insert_listpartner_insert_listpartner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./listpartner/insert-listpartner/insert-listpartner.component */
      92615);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716); // **  
      // cookie 


      var _AdminModule = /*#__PURE__*/_createClass(function _AdminModule() {
        _classCallCheck(this, _AdminModule);
      });

      _AdminModule.ɵfac = function AdminModule_Factory(t) {
        return new (t || _AdminModule)();
      };

      _AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _AdminModule
      });
      _AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__.CookieService],
        imports: [[devexpress_reporting_angular__WEBPACK_IMPORTED_MODULE_12__.DxReportViewerModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_14__.ArchwizardModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__.SweetAlert2Module, ngx_pagination__WEBPACK_IMPORTED_MODULE_16__.NgxPaginationModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__.NgApexchartsModule, ngx_print_element__WEBPACK_IMPORTED_MODULE_19__.NgxPrintElementModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__.NgMultiSelectDropDownModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_AdminModule, {
          declarations: [_service_insert_service_insert_service_component__WEBPACK_IMPORTED_MODULE_2__.InsertServiceComponent, _service_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_3__.ViewServiceComponent, _aboutus_view_aboutus_view_aboutus_component__WEBPACK_IMPORTED_MODULE_4__.ViewAboutusComponent, _aboutus_insert_aboutus_insert_aboutus_component__WEBPACK_IMPORTED_MODULE_5__.InsertAboutusComponent, _detailsofwork_view_detailsofwork_view_detailsofwork_component__WEBPACK_IMPORTED_MODULE_6__.ViewDetailsofworkComponent, _detailsofwork_insert_detailsofwork_insert_detailsofwork_component__WEBPACK_IMPORTED_MODULE_7__.InsertDetailsofworkComponent, _listpartner_view_listpartner_view_listpartner_component__WEBPACK_IMPORTED_MODULE_8__.ViewListpartnerComponent, _listpartner_insert_listpartner_insert_listpartner_component__WEBPACK_IMPORTED_MODULE_9__.InsertListpartnerComponent],
          imports: [devexpress_reporting_angular__WEBPACK_IMPORTED_MODULE_12__.DxReportViewerModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_14__.ArchwizardModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__.SweetAlert2Module, ngx_pagination__WEBPACK_IMPORTED_MODULE_16__.NgxPaginationModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__.NgApexchartsModule, ngx_print_element__WEBPACK_IMPORTED_MODULE_19__.NgxPrintElementModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__.NgMultiSelectDropDownModule]
        });
      })();
      /***/

    },

    /***/
    16993:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/components/admin/detailsofwork/insert-detailsofwork/insert-detailsofwork.component.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertDetailsofworkComponent": function InsertDetailsofworkComponent() {
          return (
            /* binding */
            _InsertDetailsofworkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_API_Service_services_detailsofwork_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/detailsofwork.service */
      85027);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../images/images */
      96381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function InsertDetailsofworkComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.button);
        }
      }

      function InsertDetailsofworkComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _InsertDetailsofworkComponent = /*#__PURE__*/function () {
        function _InsertDetailsofworkComponent(_DetailsofworkService, _Router, _FormBuilder) {
          _classCallCheck(this, _InsertDetailsofworkComponent);

          this._DetailsofworkService = _DetailsofworkService;
          this._Router = _Router;
          this._FormBuilder = _FormBuilder;
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_2__.Image;
          this.update = false;
          this.button = false;
        }

        _createClass(_InsertDetailsofworkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this._DetailsofworkService.Data.subscribe(function (res) {
              if (res != null) {
                _this6.work_id = res.work_id;
                _this6.imageLogo = _this6.img + res.image;

                _this6.initiate(res);

                _this6.update = true;
              } else {
                _this6.initiate();
              }
            });
          }
        }, {
          key: "initiate",
          value: function initiate(record) {
            this.DetailsForm = this._FormBuilder.group({
              label: [(record === null || record === void 0 ? void 0 : record.label) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              image: [(record === null || record === void 0 ? void 0 : record.image) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.DetailsForm.controls;
          } // imgFile

        }, {
          key: "getLogoUrl",
          value: function getLogoUrl(event) {
            var _this7 = this;

            var reader = new FileReader();

            if (event.target.files && event.target.files.length) {
              var _event$target$files2 = _slicedToArray(event.target.files, 1),
                  file = _event$target$files2[0];

              this.Image = event.target.files[0];
              reader.readAsDataURL(file);

              reader.onload = function () {
                _this7.imageLogo = reader.result;
              };
            }
          }
        }, {
          key: "insertappenddata",
          value: function insertappenddata() {
            this.DetailsFormData = new FormData();
            this.DetailsFormData.append("label", this.DetailsForm.value.label);
            this.DetailsFormData.append("image", this.Image);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            this.button = true;

            if (this.update == false && this.DetailsForm.status == "VALID") {
              this.insertappenddata();

              this._DetailsofworkService.Create(this.DetailsFormData).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: "success",
                  title: "Submitted Successfuly",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this8.DetailsForm.reset();

                _this8._Router.navigate(['/content/admin/ViewDetailsofwork']);
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.message
                });
                _this8.button = false;
              }, function () {
                console.log('completed');
              });
            } else if (this.update == true && this.DetailsForm.status == "VALID") {
              this.insertappenddata();

              this._DetailsofworkService.Update(this.DetailsFormData, this.work_id).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: "success",
                  title: "Submitted Successfuly",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this8.DetailsForm.reset();

                _this8._Router.navigate(['/content/admin/ViewDetailsofwork']);
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.message
                });
              }, function () {
                console.log('completed');
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Error',
                text: "Please check that all the fields are written"
              });
              this.DetailsForm.markAllAsTouched();
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._DetailsofworkService.Data.next(null);
          }
        }]);

        return _InsertDetailsofworkComponent;
      }();

      _InsertDetailsofworkComponent.ɵfac = function InsertDetailsofworkComponent_Factory(t) {
        return new (t || _InsertDetailsofworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_detailsofwork_service__WEBPACK_IMPORTED_MODULE_0__.DetailsofworkService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
      };

      _InsertDetailsofworkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InsertDetailsofworkComponent,
        selectors: [["app-insert-detailsofwork"]],
        decls: 26,
        vars: 9,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "label", "required", "", "placeholder", "label", "containerClass", "", 1, "form-control", 3, "tooltip"], [1, "col-6", "my-3"], [1, "image-style", "w-50", "p-2", 3, "src"], ["type", "file", "formControlName", "image", "accept", "image/*", "id", "getLogo", 2, "display", "none", 3, "change"], ["file", ""], ["type", "button", "onclick", "document.getElementById('getLogo').click()", 1, "btn", "btn-primary", "w-50", "d-block"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], ["type", "submit", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", "pull-right"]],
        template: function InsertDetailsofworkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Insert Detail of work");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function InsertDetailsofworkComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InsertDetailsofworkComponent_Template_input_change_19_listener($event) {
              return ctx.getLogoUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " \u0627\u0631\u0641\u0642 \u0635\u0648\u0631\u0629 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, InsertDetailsofworkComponent_ng_template_23_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, InsertDetailsofworkComponent_div_25_Template, 3, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.DetailsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-valid", ctx.fc.label.valid && ctx.fc.label.touched)("is-invalid", ctx.fc.label.invalid && ctx.fc.label.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", (ctx.fc.label.errors == null ? null : ctx.fc.label.errors.required) ? "this field is required" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.imageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r1);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtZGV0YWlsc29md29yay5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    14386:
    /*!***************************************************************************************************!*\
      !*** ./src/app/components/admin/detailsofwork/view-detailsofwork/view-detailsofwork.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewDetailsofworkComponent": function ViewDetailsofworkComponent() {
          return (
            /* binding */
            _ViewDetailsofworkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_API_Service_services_detailsofwork_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/detailsofwork.service */
      85027);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ViewDetailsofworkComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewDetailsofworkComponent_tr_31_Template_button_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3["delete"](item_r1.work_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewDetailsofworkComponent_tr_31_Template_button_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.Update(item_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.img + item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var _ViewDetailsofworkComponent = /*#__PURE__*/function () {
        function _ViewDetailsofworkComponent(_Router, _DetailsofworkService) {
          _classCallCheck(this, _ViewDetailsofworkComponent);

          this._Router = _Router;
          this._DetailsofworkService = _DetailsofworkService;
          this.detailsofworkservice = [];
        }

        _createClass(_ViewDetailsofworkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.GetDetails();
          }
        }, {
          key: "GetDetails",
          value: function GetDetails() {
            var _this9 = this;

            this._DetailsofworkService.Get().subscribe(function (res) {
              _this9.detailsofworkservice = res.data;
            });
          }
        }, {
          key: "Update",
          value: function Update(data) {
            this._Router.navigate(["/content/admin/InsertDetailsofwork"]);

            this._DetailsofworkService.Data.next(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this10 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this10._DetailsofworkService.Delete(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "success",
                    title: "Deleted Successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this10.GetDetails();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewDetailsofworkComponent;
      }();

      _ViewDetailsofworkComponent.ɵfac = function ViewDetailsofworkComponent_Factory(t) {
        return new (t || _ViewDetailsofworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_API_Service_services_detailsofwork_service__WEBPACK_IMPORTED_MODULE_0__.DetailsofworkService));
      };

      _ViewDetailsofworkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ViewDetailsofworkComponent,
        selectors: [["app-view-detailsofwork"]],
        decls: 32,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "col-6", "header-titles"], ["routerLink", "/content/admin/InsertDetailsofwork", 1, "d-block"], ["type", "button", 1, "btn", "btn-primary", "pull-right"], [1, "m-2"], [1, "fa", "fa-plus"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "p-2", 2, "height", "50px", "width", "50px"], [1, "w-100", "rounded-circle", 3, "src"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "red", "padding", "7px", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"]],
        template: function ViewDetailsofworkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0627\u0636\u0627\u0641\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ViewDetailsofworkComponent_tr_31_Template, 12, 3, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.detailsofworkservice);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRldGFpbHNvZndvcmsuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    92615:
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/admin/listpartner/insert-listpartner/insert-listpartner.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertListpartnerComponent": function InsertListpartnerComponent() {
          return (
            /* binding */
            _InsertListpartnerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_API_Service_services_learnerpartner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/learnerpartner.service */
      23743);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../images/images */
      96381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function InsertListpartnerComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.button);
        }
      }

      function InsertListpartnerComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _InsertListpartnerComponent = /*#__PURE__*/function () {
        function _InsertListpartnerComponent(_LearnerpartnerService, _Router, _FormBuilder) {
          _classCallCheck(this, _InsertListpartnerComponent);

          this._LearnerpartnerService = _LearnerpartnerService;
          this._Router = _Router;
          this._FormBuilder = _FormBuilder;
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_2__.Image;
          this.update = false;
          this.button = false;
        }

        _createClass(_InsertListpartnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this._LearnerpartnerService.Data.subscribe(function (res) {
              if (res != null) {
                _this11.partner_id = res.partner_id;
                _this11.imageLogo = _this11.img + res.image;

                _this11.initiate(res);

                _this11.update = true;
              } else {
                _this11.initiate();
              }
            });
          }
        }, {
          key: "initiate",
          value: function initiate(record) {
            this.learnerpartnerForm = this._FormBuilder.group({
              name: [(record === null || record === void 0 ? void 0 : record.name) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              image: [(record === null || record === void 0 ? void 0 : record.image) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.learnerpartnerForm.controls;
          } // imgFile

        }, {
          key: "getLogoUrl",
          value: function getLogoUrl(event) {
            var _this12 = this;

            var reader = new FileReader();

            if (event.target.files && event.target.files.length) {
              var _event$target$files3 = _slicedToArray(event.target.files, 1),
                  file = _event$target$files3[0];

              this.Image = event.target.files[0];
              reader.readAsDataURL(file);

              reader.onload = function () {
                _this12.imageLogo = reader.result;
              };
            }
          }
        }, {
          key: "insertappenddata",
          value: function insertappenddata() {
            this.learnerpartnerFormData = new FormData();
            this.learnerpartnerFormData.append("name", this.learnerpartnerForm.value.name);
            this.learnerpartnerFormData.append("image", this.Image);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this13 = this;

            this.button = true;

            if (this.update == false && this.learnerpartnerForm.status == "VALID") {
              this.insertappenddata();

              this._LearnerpartnerService.Create(this.learnerpartnerFormData).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: "success",
                  title: "Submitted Successfuly",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this13.learnerpartnerForm.reset();

                _this13._Router.navigate(['/content/admin/ViewListPartner']);
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.message
                });
                _this13.button = false;
              }, function () {
                console.log('completed');
              });
            } else if (this.update == true && this.learnerpartnerForm.status == "VALID") {
              this.insertappenddata();

              this._LearnerpartnerService.Update(this.learnerpartnerFormData, this.partner_id).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: "success",
                  title: "Submitted Successfuly",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this13.learnerpartnerForm.reset();

                _this13._Router.navigate(['/content/admin/ViewListPartner']);
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.message
                });
              }, function () {
                console.log('completed');
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Error',
                text: "Please check that all the fields are written"
              });
              this.learnerpartnerForm.markAllAsTouched();
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._LearnerpartnerService.Data.next(null);
          }
        }]);

        return _InsertListpartnerComponent;
      }();

      _InsertListpartnerComponent.ɵfac = function InsertListpartnerComponent_Factory(t) {
        return new (t || _InsertListpartnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_learnerpartner_service__WEBPACK_IMPORTED_MODULE_0__.LearnerpartnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
      };

      _InsertListpartnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InsertListpartnerComponent,
        selectors: [["app-insert-listpartner"]],
        decls: 26,
        vars: 9,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "name", "required", "", "placeholder", "name", "containerClass", "", 1, "form-control", 3, "tooltip"], [1, "col-6", "my-3"], [1, "image-style", "w-50", "p-2", 3, "src"], ["type", "file", "formControlName", "image", "accept", "image/*", "id", "getLogo", 2, "display", "none", 3, "change"], ["file", ""], ["type", "button", "onclick", "document.getElementById('getLogo').click()", 1, "btn", "btn-primary", "w-50", "d-block"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], ["type", "submit", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", "pull-right"]],
        template: function InsertListpartnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Insert Learner Partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function InsertListpartnerComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InsertListpartnerComponent_Template_input_change_19_listener($event) {
              return ctx.getLogoUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " \u0627\u0631\u0641\u0642 \u0635\u0648\u0631\u0629 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, InsertListpartnerComponent_ng_template_23_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, InsertListpartnerComponent_div_25_Template, 3, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.learnerpartnerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-valid", ctx.fc.name.valid && ctx.fc.name.touched)("is-invalid", ctx.fc.name.invalid && ctx.fc.name.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", (ctx.fc.name.errors == null ? null : ctx.fc.name.errors.required) ? "this field is required" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.imageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r1);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtbGlzdHBhcnRuZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    54222:
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/admin/listpartner/view-listpartner/view-listpartner.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewListpartnerComponent": function ViewListpartnerComponent() {
          return (
            /* binding */
            _ViewListpartnerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_API_Service_services_learnerpartner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/learnerpartner.service */
      23743);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../images/images */
      96381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ViewListpartnerComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewListpartnerComponent_tr_31_Template_button_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3["delete"](item_r1.partner_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewListpartnerComponent_tr_31_Template_button_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.Update(item_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.img + item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      var _ViewListpartnerComponent = /*#__PURE__*/function () {
        function _ViewListpartnerComponent(_LearnerpartnerService, _Router) {
          _classCallCheck(this, _ViewListpartnerComponent);

          this._LearnerpartnerService = _LearnerpartnerService;
          this._Router = _Router;
          this.learnerpartner = [];
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_2__.Image;
        }

        _createClass(_ViewListpartnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.GetLearnerPartner();
          }
        }, {
          key: "GetLearnerPartner",
          value: function GetLearnerPartner() {
            var _this14 = this;

            this._LearnerpartnerService.Get().subscribe(function (res) {
              _this14.learnerpartner = res.data;
            });
          }
        }, {
          key: "Update",
          value: function Update(data) {
            this._Router.navigate(["/content/admin/InsertListPartner"]);

            this._LearnerpartnerService.Data.next(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this15 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this15._LearnerpartnerService.Delete(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "success",
                    title: "Deleted Successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this15.GetLearnerPartner();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewListpartnerComponent;
      }();

      _ViewListpartnerComponent.ɵfac = function ViewListpartnerComponent_Factory(t) {
        return new (t || _ViewListpartnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_learnerpartner_service__WEBPACK_IMPORTED_MODULE_0__.LearnerpartnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _ViewListpartnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewListpartnerComponent,
        selectors: [["app-view-listpartner"]],
        decls: 32,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "col-6", "header-titles"], ["routerLink", "/content/admin/InsertListPartner", 1, "d-block"], ["type", "button", 1, "btn", "btn-primary", "pull-right"], [1, "m-2"], [1, "fa", "fa-plus"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "p-2", 2, "height", "50px", "width", "50px"], [1, "w-100", "rounded-circle", 3, "src"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "red", "padding", "7px", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"]],
        template: function ViewListpartnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0634\u0631\u0643\u0627\u0621 \u0627\u0644\u0646\u062C\u0627\u062D");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0627\u0636\u0627\u0641\u0629 \u0634\u0631\u064A\u0643 \u0646\u062C\u0627\u062D");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ViewListpartnerComponent_tr_31_Template, 12, 3, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.learnerpartner);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWxpc3RwYXJ0bmVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    54816:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/admin/service/insert-service/insert-service.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertServiceComponent": function InsertServiceComponent() {
          return (
            /* binding */
            _InsertServiceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_API_Service_services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/services.service */
      30040);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../images/images */
      96381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function InsertServiceComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.button);
        }
      }

      function InsertServiceComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _InsertServiceComponent = /*#__PURE__*/function () {
        function _InsertServiceComponent(_FormBuilder, _ServicesService, _Router) {
          _classCallCheck(this, _InsertServiceComponent);

          this._FormBuilder = _FormBuilder;
          this._ServicesService = _ServicesService;
          this._Router = _Router;
          this.update = false;
          this.button = false;
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_2__.Image;
        }

        _createClass(_InsertServiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this._ServicesService.Data.subscribe(function (res) {
              if (res != null) {
                _this16.service_id = res.service_id;
                _this16.imageLogo = _this16.img + res.image;

                _this16.initiate(res);

                _this16.update = true;
              } else {
                _this16.initiate();
              }
            });
          }
        }, {
          key: "initiate",
          value: function initiate(record) {
            this.serviceForm = this._FormBuilder.group({
              name: [(record === null || record === void 0 ? void 0 : record.name) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              price: [(record === null || record === void 0 ? void 0 : record.price) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              details: [(record === null || record === void 0 ? void 0 : record.details) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              image: [(record === null || record === void 0 ? void 0 : record.image) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.serviceForm.controls;
          } // imgFile

        }, {
          key: "getLogoUrl",
          value: function getLogoUrl(event) {
            var _this17 = this;

            var reader = new FileReader();

            if (event.target.files && event.target.files.length) {
              var _event$target$files4 = _slicedToArray(event.target.files, 1),
                  file = _event$target$files4[0];

              this.Image = event.target.files[0];
              reader.readAsDataURL(file);

              reader.onload = function () {
                _this17.imageLogo = reader.result;
              };
            }
          }
        }, {
          key: "insertappenddata",
          value: function insertappenddata() {
            this.serviceFormData = new FormData();
            this.serviceFormData.append("name", this.serviceForm.value.name);
            this.serviceFormData.append("price", this.serviceForm.value.price);
            this.serviceFormData.append("details", this.serviceForm.value.details);
            this.serviceFormData.append("image", this.Image);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this18 = this;

            this.button = true;

            if (this.update == false && this.serviceForm.status == "VALID") {
              this.insertappenddata();

              this._ServicesService.CreateService(this.serviceFormData).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: "success",
                  title: "Submitted Successfuly",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this18.serviceForm.reset();

                _this18._Router.navigate(['/content/admin/ViewService']);
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.message
                });
                _this18.button = false;
              }, function () {
                console.log('completed');
              });
            } else if (this.update == true && this.serviceForm.status == "VALID") {
              this.insertappenddata();

              this._ServicesService.UpdateService(this.serviceFormData, this.service_id).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: "success",
                  title: "Submitted Successfuly",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this18.serviceForm.reset();

                _this18._Router.navigate(['/content/admin/ViewService']);
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.message
                });
              }, function () {
                console.log('completed');
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Error',
                text: "Please check that all the fields are written"
              });
              this.serviceForm.markAllAsTouched();
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._ServicesService.Data.next(null);
          }
        }]);

        return _InsertServiceComponent;
      }();

      _InsertServiceComponent.ɵfac = function InsertServiceComponent_Factory(t) {
        return new (t || _InsertServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _InsertServiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InsertServiceComponent,
        selectors: [["app-insert-service"]],
        decls: 38,
        vars: 19,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "name", "required", "", "placeholder", "name", "containerClass", "", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "price", "required", "", "placeholder", "price", "containerClass", "", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "details", "required", "", "placeholder", "details", "containerClass", "", 1, "form-control", 3, "tooltip"], [1, "col-6", "my-3"], [1, "image-style", "w-50", "p-2", 3, "src"], ["type", "file", "formControlName", "image", "accept", "image/*", "id", "getLogo", 2, "display", "none", 3, "change"], ["file", ""], ["type", "button", "onclick", "document.getElementById('getLogo').click()", 1, "btn", "btn-primary", "w-50", "d-block"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], ["type", "submit", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", "pull-right"]],
        template: function InsertServiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Insert Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function InsertServiceComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " price");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " details");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InsertServiceComponent_Template_input_change_31_listener($event) {
              return ctx.getLogoUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " \u0627\u0631\u0641\u0642 \u0635\u0648\u0631\u0629 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, InsertServiceComponent_ng_template_35_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, InsertServiceComponent_div_37_Template, 3, 0, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.serviceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-valid", ctx.fc.name.valid && ctx.fc.name.touched)("is-invalid", ctx.fc.name.invalid && ctx.fc.name.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", (ctx.fc.name.errors == null ? null : ctx.fc.name.errors.required) ? "this field is required" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-valid", ctx.fc.price.valid && ctx.fc.price.touched)("is-invalid", ctx.fc.price.invalid && ctx.fc.price.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", (ctx.fc.price.errors == null ? null : ctx.fc.price.errors.required) ? "this field is required" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-valid", ctx.fc.details.valid && ctx.fc.details.touched)("is-invalid", ctx.fc.details.invalid && ctx.fc.details.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", (ctx.fc.details.errors == null ? null : ctx.fc.details.errors.required) ? "this field is required" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.imageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r1);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    89158:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/admin/service/view-service/view-service.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewServiceComponent": function ViewServiceComponent() {
          return (
            /* binding */
            _ViewServiceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_API_Service_services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/services.service */
      30040);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../images/images */
      96381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ViewServiceComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewServiceComponent_tr_33_Template_button_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3["delete"](item_r1.service_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewServiceComponent_tr_33_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.Update(item_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.details);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.img + item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      var _ViewServiceComponent = /*#__PURE__*/function () {
        function _ViewServiceComponent(_ServicesService, _Router) {
          _classCallCheck(this, _ViewServiceComponent);

          this._ServicesService = _ServicesService;
          this._Router = _Router;
          this.services = [];
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_2__.Image;
        }

        _createClass(_ViewServiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.GetServices();
          }
        }, {
          key: "GetServices",
          value: function GetServices() {
            var _this19 = this;

            this._ServicesService.GetServices().subscribe(function (res) {
              _this19.services = res.data;
            });
          }
        }, {
          key: "Update",
          value: function Update(data) {
            this._Router.navigate(["/content/admin/InsertService"]);

            this._ServicesService.Data.next(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this20 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this20._ServicesService.DeleteService(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "success",
                    title: "Deleted Successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this20.GetServices();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewServiceComponent;
      }();

      _ViewServiceComponent.ɵfac = function ViewServiceComponent_Factory(t) {
        return new (t || _ViewServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _ViewServiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewServiceComponent,
        selectors: [["app-view-service"]],
        decls: 34,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "col-6", "header-titles"], ["routerLink", "/content/admin/InsertService", 1, "d-block"], ["type", "button", 1, "btn", "btn-primary", "pull-right"], [1, "m-2"], [1, "fa", "fa-plus"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], ["scope", "col"], ["class", " ", 4, "ngFor", "ngForOf"], [1, ""], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "p-2", 2, "height", "50px", "width", "50px"], [1, "w-100", "rounded-circle", 3, "src"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "red", "padding", "7px", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"]],
        template: function ViewServiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0627\u0644\u062E\u062F\u0645\u0627\u062A");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0627\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ViewServiceComponent_tr_33_Template, 14, 4, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.services);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    79154:
    /*!****************************************************************!*\
      !*** ./src/app/shared/API-Service/services/aboutus.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutusService": function AboutusService() {
          return (
            /* binding */
            _AboutusService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AboutusService2 = /*#__PURE__*/function () {
        function _AboutusService2(_HttpClient) {
          _classCallCheck(this, _AboutusService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        } // This to get the About Us


        _createClass(_AboutusService2, [{
          key: "Get",
          value: function Get() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/listAboutUs"));
          } // This to post the About Us

        }, {
          key: "Create",
          value: function Create(aboutus) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/createAboutUs"), aboutus);
          } // This to Update the About Us

        }, {
          key: "Update",
          value: function Update(aboutus, id) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/updateAboutUs/").concat(id), aboutus);
          } // This to delete the About Us

        }, {
          key: "Delete",
          value: function Delete(id) {
            return this._HttpClient["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/deleteAboutUs/").concat(id));
          }
        }]);

        return _AboutusService2;
      }();

      _AboutusService2.ɵfac = function AboutusService_Factory(t) {
        return new (t || _AboutusService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _AboutusService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AboutusService2,
        factory: _AboutusService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    85027:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/API-Service/services/detailsofwork.service.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailsofworkService": function DetailsofworkService() {
          return (
            /* binding */
            _DetailsofworkService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _DetailsofworkService2 = /*#__PURE__*/function () {
        function _DetailsofworkService2(_HttpClient) {
          _classCallCheck(this, _DetailsofworkService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        } // This to get the DetailsOfWork


        _createClass(_DetailsofworkService2, [{
          key: "Get",
          value: function Get() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/listDetailsOfWork"));
          } // This to post the DetailsOfWork

        }, {
          key: "Create",
          value: function Create(DetailsOfWork) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/createDetailsOfWork"), DetailsOfWork);
          } // This to Update the DetailsOfWork

        }, {
          key: "Update",
          value: function Update(DetailsOfWork, id) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/updateDetailsOfWork/").concat(id), DetailsOfWork);
          } // This to delete the DetailsOfWork

        }, {
          key: "Delete",
          value: function Delete(id) {
            return this._HttpClient["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/deleteDetailsOfWork/").concat(id));
          }
        }]);

        return _DetailsofworkService2;
      }();

      _DetailsofworkService2.ɵfac = function DetailsofworkService_Factory(t) {
        return new (t || _DetailsofworkService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _DetailsofworkService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _DetailsofworkService2,
        factory: _DetailsofworkService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    23743:
    /*!***********************************************************************!*\
      !*** ./src/app/shared/API-Service/services/learnerpartner.service.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LearnerpartnerService": function LearnerpartnerService() {
          return (
            /* binding */
            _LearnerpartnerService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _LearnerpartnerService2 = /*#__PURE__*/function () {
        function _LearnerpartnerService2(_HttpClient) {
          _classCallCheck(this, _LearnerpartnerService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        } // This to get the Learn partner


        _createClass(_LearnerpartnerService2, [{
          key: "Get",
          value: function Get() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/listPartner"));
          } // This to post the Learn partner

        }, {
          key: "Create",
          value: function Create(partner) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/createPartner"), partner);
          } // This to Update the Learn partner

        }, {
          key: "Update",
          value: function Update(partner, id) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/updatePartner/").concat(id), partner);
          } // This to delete the Learn partner

        }, {
          key: "Delete",
          value: function Delete(id) {
            return this._HttpClient["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/deletePartner/").concat(id));
          }
        }]);

        return _LearnerpartnerService2;
      }();

      _LearnerpartnerService2.ɵfac = function LearnerpartnerService_Factory(t) {
        return new (t || _LearnerpartnerService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _LearnerpartnerService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _LearnerpartnerService2,
        factory: _LearnerpartnerService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    21270:
    /*!**************************************************************!*\
      !*** ./src/app/shared/API-Service/services/login.service.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginService": function LoginService() {
          return (
            /* binding */
            _LoginService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _LoginService2 = /*#__PURE__*/function () {
        function _LoginService2(_HttpClient) {
          _classCallCheck(this, _LoginService2);

          this._HttpClient = _HttpClient;
        }

        _createClass(_LoginService2, [{
          key: "user_login",
          value: function user_login(person) {
            console.log(person);
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/User/Login"), person);
          }
        }]);

        return _LoginService2;
      }();

      _LoginService2.ɵfac = function LoginService_Factory(t) {
        return new (t || _LoginService2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _LoginService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _LoginService2,
        factory: _LoginService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    30040:
    /*!*****************************************************************!*\
      !*** ./src/app/shared/API-Service/services/services.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServicesService": function ServicesService() {
          return (
            /* binding */
            _ServicesService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _ServicesService2 = /*#__PURE__*/function () {
        function _ServicesService2(_HttpClient) {
          _classCallCheck(this, _ServicesService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        } // This to get the services


        _createClass(_ServicesService2, [{
          key: "GetServices",
          value: function GetServices() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/listService"));
          } // This to post the services

        }, {
          key: "CreateService",
          value: function CreateService(service) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/createService"), service);
          } // This to Update the services

        }, {
          key: "UpdateService",
          value: function UpdateService(service, id) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/updateService/").concat(id), service);
          } // This to delete the services

        }, {
          key: "DeleteService",
          value: function DeleteService(id) {
            return this._HttpClient["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/deleteService/").concat(id));
          }
        }]);

        return _ServicesService2;
      }();

      _ServicesService2.ɵfac = function ServicesService_Factory(t) {
        return new (t || _ServicesService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _ServicesService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ServicesService2,
        factory: _ServicesService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    86022:
    /*!********************************************************!*\
      !*** ./src/app/shared/Models/login/login.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _API_Service_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../API-Service/services/login.service */
      21270);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function LoginComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_27_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_28_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(_FormBuilder, _LoginService, _Router) {
          _classCallCheck(this, _LoginComponent);

          this._FormBuilder = _FormBuilder;
          this._LoginService = _LoginService;
          this._Router = _Router;
          this.changetype = true;
          this.show = false;
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initiate();
            this.currentyear = new Date().getFullYear();
          }
        }, {
          key: "initiate",
          value: function initiate() {
            this.person = this._FormBuilder.group({
              "userName": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
              "password": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
            });
          } // loopform() {
          //   this.data = new FormData();
          //   this.data.append("userName", this.person.value.user_name);
          //   this.data.append("password", this.person.value.passowrd);
          // }

        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
            this.changetype = !this.changetype;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this._Router.navigate(["/content/admin"]); //   this._LoginService.user_login(this.person.value).subscribe((res) => {
            //     debugger
            //         console.log(res);
            //         Swal.fire({
            //           icon: "success",
            //           title: "Signed in successfully",
            //           showConfirmButton: false,
            //           timer: 1500,
            //         });
            //         localStorage.setItem('Authorization',res.data["token"]);
            //         this._Router.navigate(["/content/admin"]);
            //   },(err) =>{
            //   console.log("their is an error");
            //   Swal.fire({
            //     icon: 'error',
            //     title: 'failed to sign in',
            //     text:err.error.message    
            //   })
            //   }, () =>{
            //     console.log("completed");
            //   });
            // }

          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_API_Service_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 40,
        vars: 5,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-7", "p-0", "d-none", "d-sm-block"], ["alt", "", "src", "../assets/images/logo/5.png", "alt", "looginpage", 1, "w-100", "vh-100"], [1, "col-lg-5", "col-sm-12"], [1, "col-12", "p-0"], [1, "login-card"], ["id", "Sign-User", 1, "login-main"], [1, "text-center"], ["novalidate", "", 1, "theme-form", "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-form-label", "col-12"], [1, "col-12", "col-sm-12"], ["required", "", "placeholder", "name", "formControlName", "userName", 1, "form-control"], [1, "col-12", "mb-0"], [1, "col-form-label"], [1, "form-input", "position-relative"], ["required", "", "placeholder", "*********", "formControlName", "password", 1, "form-control", 3, "type"], ["class", "show-hide", "style", "margin: -35px -5px 0 0;", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0", "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "w-100"], [1, "w-100"], [2, "text-align", "center"], [1, "show-hide", 2, "margin", "-35px -5px 0 0", 3, "click"], [1, "show", "text-primary"], [1, "hide", "text-primary"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "PROXY GROUP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_14_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "User name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LoginComponent_div_27_Template, 2, 0, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LoginComponent_div_28_Template, 2, 0, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Developed & Powered by Software Builders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.person);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.changetype ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \xA9PROXY GROUP ", ctx.currentyear, " All Rights Reserved");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6210:
    /*!******************************************!*\
      !*** ./src/app/shared/Pipes/exp.pipe.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExpPipe": function ExpPipe() {
          return (
            /* binding */
            _ExpPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ExpPipe = /*#__PURE__*/function () {
        function _ExpPipe() {
          _classCallCheck(this, _ExpPipe);
        }

        _createClass(_ExpPipe, [{
          key: "transform",
          value: function transform(value) {
            console.log(value); // const currentYear = new Date().getFullYear();
            // const dobYear = value.getFullYear();     const age = currentYear - dobYear;

            return {
              id: 212121,
              test: true
            };
          }
        }]);

        return _ExpPipe;
      }();

      _ExpPipe.ɵfac = function ExpPipe_Factory(t) {
        return new (t || _ExpPipe)();
      };

      _ExpPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "exp",
        type: _ExpPipe,
        pure: true
      });
      /***/
    },

    /***/
    41299:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbComponent": function BreadcrumbComponent() {
          return (
            /* binding */
            _BreadcrumbComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BreadcrumbComponent = /*#__PURE__*/function () {
        function _BreadcrumbComponent() {
          _classCallCheck(this, _BreadcrumbComponent);
        }

        _createClass(_BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BreadcrumbComponent;
      }();

      _BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || _BreadcrumbComponent)();
      };

      _BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          title: "title",
          items: "items",
          active_item: "active_item"
        },
        decls: 8,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "page-title"], [1, "row"], [1, "col-6"], [1, "breadcrumb"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ol", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        styles: ["h3[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQSxxQ0FBQTtBQUNEIiwiZmlsZSI6ImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaDN7XHJcbiB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"]
      });
      /***/
    },

    /***/
    71889:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/check-date/check-date.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckDateComponent": function CheckDateComponent() {
          return (
            /* binding */
            _CheckDateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CheckDateComponent = /*#__PURE__*/function () {
        function _CheckDateComponent() {
          _classCallCheck(this, _CheckDateComponent);

          this.expiration = (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date().setUTCHours(24), "yyyy-MM-dd", "en-US");
          this.licenseIssue = (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date().setUTCHours(-24), "yyyy-MM-dd", "en-US");
        }

        _createClass(_CheckDateComponent, [{
          key: "getDateUtc",
          value: function getDateUtc(licenseExpirationDate) {
            // console.log(licenseExpirationDate);
            var date1 = new Date((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(licenseExpirationDate, "yyyy-dd-MM", "en-US"));
            var currentDate = new Date();

            if (date1.getTime() < currentDate.getTime()) {
              console.log("date1 is before current date");
              return false;
            } else {
              return true;
            } // if(date1.getTime()>currentDate.getTime()){
            //   console.log("date1 is after current date red")
            //   console.log(false);
            //   return false
            // }

          }
        }]);

        return _CheckDateComponent;
      }();

      _CheckDateComponent.ɵfac = function CheckDateComponent_Factory(t) {
        return new (t || _CheckDateComponent)();
      };

      _CheckDateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CheckDateComponent,
        selectors: [["app-check-date"]],
        decls: 0,
        vars: 0,
        template: function CheckDateComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /***/
    },

    /***/
    61676:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeatherIconsComponent": function FeatherIconsComponent() {
          return (
            /* binding */
            _FeatherIconsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! feather-icons */
      66379);
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FeatherIconsComponent = /*#__PURE__*/function () {
        function _FeatherIconsComponent() {
          _classCallCheck(this, _FeatherIconsComponent);
        }

        _createClass(_FeatherIconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
            });
          }
        }]);

        return _FeatherIconsComponent;
      }();

      _FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) {
        return new (t || _FeatherIconsComponent)();
      };

      _FeatherIconsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FeatherIconsComponent,
        selectors: [["app-feather-icons"]],
        inputs: {
          icon: "icon"
        },
        decls: 1,
        vars: 1,
        template: function FeatherIconsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-feather", ctx.icon);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    66526:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);

          this.EmployeeName = "";
          this.today = Date.now();
          this.EmployeeName = localStorage.getItem('CamelgateName');
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 6,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "row"], ["div", "", 1, "col-md-12", "footer-copyright", "text-center"], [1, "mb-0"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "\xA9 PROXY GROUP 2023 All Rights Reserved Developed & Powered by ProxyGroup.com"), " ");
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    38400:
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/bookmark/bookmark.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarkComponent": function BookmarkComponent() {
          return (
            /* binding */
            _BookmarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/nav.service */
      5897);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      function BookmarkComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", item_r2 == null ? null : item_r2.title)("routerLink", item_r2 == null ? null : item_r2.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r2 == null ? null : item_r2.icon);
        }
      }

      function BookmarkComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_div_22_div_1_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r5.removeFix();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_div_22_div_1_Template_a_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var item_r4 = restoredCtx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r7.addToBookmark(item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r4 == null ? null : item_r4.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("starred", item_r4.bookmark);
        }
      }

      function BookmarkComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BookmarkComponent_div_22_div_1_Template, 10, 5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx_r1.searchResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 3, ctx_r1.menuItems, 0, 8));
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var _BookmarkComponent = /*#__PURE__*/function () {
        function _BookmarkComponent(navServices) {
          _classCallCheck(this, _BookmarkComponent);

          this.navServices = navServices;
          this.bookmarkItems = [];
          this.bookmark = false;
          this.bookmarkFlip = false;
          this.open = false;
          this.searchResult = false;
          this.searchResultEmpty = false;
        }

        _createClass(_BookmarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.navServices.items.subscribe(function (menuItems) {
              _this21.items = menuItems;

              _this21.items.filter(function (items) {
                if (items.bookmark) {
                  _this21.bookmarkItems.push(items);
                }

                if (!items.children) return false;
                items.children.filter(function (subItems) {
                  if (subItems.bookmark) {
                    _this21.bookmarkItems.push(subItems);
                  }
                });
              });
            });
          }
        }, {
          key: "openBookMark",
          value: function openBookMark() {
            this.bookmark = !this.bookmark;
          }
        }, {
          key: "flipBookMark",
          value: function flipBookMark() {
            this.bookmarkFlip = !this.bookmarkFlip;
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            var _this22 = this;

            term ? this.addFix() : this.removeFix();

            if (!term) {
              this.open = false;
              return this.menuItems = [];
            }

            var items = [];
            term = term.toLowerCase();
            this.items.filter(function (menuItems) {
              if (!(menuItems === null || menuItems === void 0 ? void 0 : menuItems.title)) return false;

              if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
              }

              if (!menuItems.children) {
                return false;
              }

              menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                  subItems.icon = menuItems.icon;
                  items.push(subItems);
                }

                if (!subItems.children) {
                  return false;
                }

                subItems.children.filter(function (suSubItems) {
                  if (suSubItems.title.toLowerCase().includes(term)) {
                    suSubItems.icon = menuItems.icon;
                    items.push(suSubItems);
                  }
                });
              });

              _this22.checkSearchResultEmpty(items);

              _this22.menuItems = items;
            });
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(items) {
            if (!items.length) {
              this.searchResultEmpty = true;
            } else {
              this.searchResultEmpty = false;
            }
          }
        }, {
          key: "addFix",
          value: function addFix() {
            this.searchResult = true;
          }
        }, {
          key: "removeFix",
          value: function removeFix() {
            this.searchResult = false;
            this.text = '';
          }
        }, {
          key: "addToBookmark",
          value: function addToBookmark(items) {
            var index = this.bookmarkItems.indexOf(items);

            if (index === -1 && !items.bookmark) {
              items.bookmark = true;
              this.bookmarkItems.push(items);
              this.text = '';
            } else {
              this.bookmarkItems.splice(index, 1);
              items.bookmark = false;
            }
          }
        }]);

        return _BookmarkComponent;
      }();

      _BookmarkComponent.ɵfac = function BookmarkComponent_Factory(t) {
        return new (t || _BookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };

      _BookmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BookmarkComponent,
        selectors: [["app-bookmark"]],
        decls: 30,
        vars: 13,
        consts: [[1, "notification-box", 3, "click"], [3, "icon"], [1, "onhover-show-div", "bookmark-flip"], [1, "flip-card"], [1, "flip-card-inner"], [1, "front"], [1, "droplet-dropdown", "bookmark-dropdown"], [1, "gradient-primary"], [1, "f-18", "mb-0"], [1, "custom-scrollbar"], [1, "row"], ["class", "col-4 text-center", 4, "ngFor", "ngForOf"], [1, "text-center", 3, "click"], ["id", "flip-btn", 1, "flip-btn"], [1, "back"], [1, "droplet-dropdown", "bookmark-dropdown", "flip-back-content"], ["type", "text", "placeholder", "search...", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], ["class", "Typeahead-menu custom-scrollbar", "id", "boomark-search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], [3, "click"], ["id", "flip-back", 1, "d-block", "flip-back"], [1, "col-4", "text-center"], ["placement", "top", "routerLinkActive", "item?.active", 3, "ngbTooltip", "routerLink"], ["id", "boomark-search-outer", 1, "Typeahead-menu", "custom-scrollbar"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"], [1, "pull-right"], ["href", "javacript:void(0)", 3, "click"], [1, "fa", "fa-star-o", "f-18", "mt-1"]],
        template: function BookmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_div_click_0_listener() {
              return ctx.openBookMark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BookmarkComponent_div_13_Template, 3, 3, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_li_click_14_listener() {
              return ctx.flipBookMark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Add New Bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BookmarkComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.text = $event;
            })("keyup", function BookmarkComponent_Template_input_keyup_21_listener() {
              return ctx.searchTerm(ctx.text);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BookmarkComponent_div_22_Template, 3, 7, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Opps!! There are no result found. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_li_click_27_listener() {
              return ctx.flipBookMark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.bookmarkFlip || ctx.bookmark);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("flipped", ctx.bookmarkFlip);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bookmarkItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rbWFyay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    88204:
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/cart/cart.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartComponent": function CartComponent() {
          return (
            /* binding */
            _CartComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);

      var _CartComponent = /*#__PURE__*/function () {
        function _CartComponent() {
          _classCallCheck(this, _CartComponent);

          this.openCart = false;
        }

        _createClass(_CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // For Mobile Device

        }, {
          key: "toggleCart",
          value: function toggleCart() {
            this.openCart = !this.openCart;
          }
        }]);

        return _CartComponent;
      }();

      _CartComponent.ɵfac = function CartComponent_Factory(t) {
        return new (t || _CartComponent)();
      };

      _CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CartComponent,
        selectors: [["app-cart"]],
        decls: 64,
        vars: 6,
        consts: [[1, "cart-box", 3, "click"], [3, "icon"], [1, "badge", "badge-pill", "badge-primary"], [1, "cart-dropdown", "onhover-show-div"], [1, "mb-0", "f-20"], [1, "mt-0"], [1, "media"], ["src", "assets/images/ecommerce/01.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "mr-3", "img-60"], [1, "media-body"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "data-type", "minus", "data-field", "", 1, "btn", "quantity-left-minus"], ["data-feather", "minus"], ["type", "text", "name", "quantity", "value", "1", 1, "form-control", "input-number"], ["type", "button", "data-type", "plus", "data-field", "", 1, "btn", "quantity-right-plus"], ["data-feather", "plus"], [1, "text-right", "text-muted"], [1, "close-circle"], ["href", "#"], ["src", "assets/images/ecommerce/03.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "mr-3", "img-60"], ["type", "button", "data-type", "minus", 1, "btn", "quantity-left-minus"], ["type", "button", "data-type", "plus", 1, "btn", "quantity-right-plus"], [1, "total"], [1, "mb-2", "mt-0", "text-muted"], [1, "f-right", "f-20"], ["href", "#", 1, "btn", "btn-block", "btn-primary", "view-cart"], ["href", "#", 1, "btn", "btn-block", "btn-secondary", "view-cart"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_Template_div_click_0_listener() {
              return ctx.toggleCart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shoping Bag");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "V-Neck Shawl Collar Woman's Solid T-Shirt");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Yellow(#fcb102)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "$299.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "V-Neck Shawl Collar Woman's Solid T-Shirt");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Yellow(#fcb102)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h6", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "$299.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Order Total : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "$598.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Go to shoping bag ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Checkout");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "shopping-cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openCart);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "shopping-cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "x");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    85607:
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/languages/languages.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguagesComponent": function LanguagesComponent() {
          return (
            /* binding */
            _LanguagesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/layout.service */
      85682);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/nav.service */
      5897);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function LanguagesComponent_div_7_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", lang_r1.type, ")");
        }
      }

      function LanguagesComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LanguagesComponent_div_7_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var lang_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.changeLanguage(lang_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LanguagesComponent_div_7_span_4_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", lang_r1.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lang_r1.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", lang_r1.type);
        }
      }

      var _LanguagesComponent = /*#__PURE__*/function () {
        function _LanguagesComponent(translate, layout, navServices) {
          _classCallCheck(this, _LanguagesComponent);

          this.translate = translate;
          this.layout = layout;
          this.navServices = navServices;
          this.language = false;
          this.languages = [{
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
          }, {
            language: 'Arabic',
            code: 'ar',
            type: 'EG',
            icon: 'sa'
          }];
          this.selectedLanguage = {
            language: 'Arabic',
            code: 'ar',
            type: 'EG',
            icon: 'sa'
          };
          this.layoutType = 'ltr';
        }

        _createClass(_LanguagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changeLanguage(this.languages[1]);
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(lang) {
            this.translate.use(lang.code);
            this.selectedLanguage = lang;
            this.layout.language = lang.code;

            if (lang.code == 'ar') {
              this.customizeLayoutType('rtl');
            } else {
              this.customizeLayoutType('ltr');
            }
          }
        }, {
          key: "customizeLayoutType",
          value: function customizeLayoutType(val) {
            this.layoutType = val;
            console.log(val);
            this.layout.config.settings.layout_type = val;

            if (val == 'rtl') {
              document.getElementsByTagName('html')[0].setAttribute('dir', val);
            } else {
              document.getElementsByTagName('html')[0].removeAttribute('dir');
            }
          }
        }]);

        return _LanguagesComponent;
      }();

      _LanguagesComponent.ɵfac = function LanguagesComponent_Factory(t) {
        return new (t || _LanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__.NavService));
      };

      _LanguagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LanguagesComponent,
        selectors: [["app-languages"]],
        decls: 8,
        vars: 9,
        consts: [[1, "translate_wrapper"], [1, "current_lang"], [1, "lang"], [1, "lang-txt"], [1, "more_lang"], ["class", "lang selected", "data-value", "en", 3, "click", 4, "ngFor", "ngForOf"], ["data-value", "en", 1, "lang", "selected", 3, "click"], [4, "ngIf"]],
        template: function LanguagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LanguagesComponent_div_7_Template, 5, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.navServices.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx.selectedLanguage.icon, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedLanguage.code);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.navServices.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    54399:
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/mega-menu/mega-menu.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MegaMenuComponent": function MegaMenuComponent() {
          return (
            /* binding */
            _MegaMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/nav.service */
      5897);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      function MegaMenuComponent_div_13_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenMegaItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !childrenMegaItem_r5.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, childrenMegaItem_r5.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenMegaItem_r5.title, " ");
        }
      }

      function MegaMenuComponent_div_13_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenMegaItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenMegaItem_r5.type ? null : childrenMegaItem_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenMegaItem_r5.title, " ");
        }
      }

      function MegaMenuComponent_div_13_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenMegaItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenMegaItem_r5.type ? null : childrenMegaItem_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenMegaItem_r5.title, " ");
        }
      }

      function MegaMenuComponent_div_13_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_div_13_ul_5_li_1_a_1_Template, 2, 6, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MegaMenuComponent_div_13_ul_5_li_1_a_2_Template, 2, 4, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MegaMenuComponent_div_13_ul_5_li_1_a_3_Template, 2, 2, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenMegaItem_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenMegaItem_r5.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenMegaItem_r5.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenMegaItem_r5.type === "extTabLink");
        }
      }

      function MegaMenuComponent_div_13_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_div_13_ul_5_li_1_Template, 4, 3, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var megaItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", !megaItem_r2.active && ctx_r3.navServices.megaMenuColapse);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", megaItem_r2.children);
        }
      }

      function MegaMenuComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MegaMenuComponent_div_13_Template_div_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var megaItem_r2 = restoredCtx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.toggletNavActive(megaItem_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MegaMenuComponent_div_13_ul_5_Template, 2, 3, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var megaItem_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", megaItem_r2.active && ctx_r0.navServices.megaMenuColapse);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](megaItem_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", megaItem_r2.children);
        }
      }

      function MegaMenuComponent_li_20_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", levelmenuitem_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](levelmenuitem_r15.title);
        }
      }

      function MegaMenuComponent_li_20_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !levelmenuitem_r15.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, levelmenuitem_r15.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", levelmenuitem_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](levelmenuitem_r15.title);
        }
      }

      function MegaMenuComponent_li_20_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !levelmenuitem_r15.type ? null : levelmenuitem_r15.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", levelmenuitem_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](levelmenuitem_r15.title);
        }
      }

      function MegaMenuComponent_li_20_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !levelmenuitem_r15.type ? null : levelmenuitem_r15.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", levelmenuitem_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](levelmenuitem_r15.title);
        }
      }

      function MegaMenuComponent_li_20_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !childrenItem_r26.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, childrenItem_r26.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", childrenItem_r26.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](childrenItem_r26.title);
        }
      }

      function MegaMenuComponent_li_20_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenItem_r26.type ? null : childrenItem_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", childrenItem_r26.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](childrenItem_r26.title);
        }
      }

      function MegaMenuComponent_li_20_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenItem_r26.type ? null : childrenItem_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", childrenItem_r26.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](childrenItem_r26.title);
        }
      }

      function MegaMenuComponent_li_20_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_li_20_ul_5_li_1_a_1_Template, 4, 7, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MegaMenuComponent_li_20_ul_5_li_1_a_2_Template, 4, 5, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MegaMenuComponent_li_20_ul_5_li_1_a_3_Template, 4, 3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extTabLink");
        }
      }

      function MegaMenuComponent_li_20_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_li_20_ul_5_li_1_Template, 4, 3, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", levelmenuitem_r15.children);
        }
      }

      function MegaMenuComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_li_20_a_1_Template, 4, 2, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MegaMenuComponent_li_20_a_2_Template, 4, 7, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MegaMenuComponent_li_20_a_3_Template, 4, 5, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MegaMenuComponent_li_20_a_4_Template, 4, 3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MegaMenuComponent_li_20_ul_5_Template, 2, 1, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.children);
        }
      }

      var _MegaMenuComponent = /*#__PURE__*/function () {
        function _MegaMenuComponent(navServices) {
          var _this23 = this;

          _classCallCheck(this, _MegaMenuComponent);

          this.navServices = navServices;
          this.navServices.megaItems.subscribe(function (megaItems) {
            return _this23.megaItems = megaItems;
          });
          this.navServices.levelmenuitems.subscribe(function (levelmenuitems) {
            return _this23.levelmenuitems = levelmenuitems;
          });
        }

        _createClass(_MegaMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "megaMenuToggle",
          value: function megaMenuToggle() {
            this.navServices.levelMenu = false;
            this.navServices.megaMenu = !this.navServices.megaMenu;

            if (window.innerWidth < 991) {
              this.navServices.collapseSidebar = true;
            }
          }
        }, {
          key: "levelMenuToggle",
          value: function levelMenuToggle() {
            this.navServices.megaMenu = false;
            this.navServices.levelMenu = !this.navServices.levelMenu;

            if (window.innerWidth < 991) {
              this.navServices.collapseSidebar = true;
            }
          } // Click Toggle menu

        }, {
          key: "toggletNavActive",
          value: function toggletNavActive(item) {
            var _this24 = this;

            if (!item.active) {
              this.megaItems.forEach(function (a) {
                if (_this24.megaItems.includes(item)) {
                  a.active = false;
                }

                if (!a.children) {
                  return false;
                }

                a.children.forEach(function (b) {
                  if (a.children.includes(item)) {
                    b.active = false;
                  }
                });
              });
            }

            item.active = !item.active;
          }
        }]);

        return _MegaMenuComponent;
      }();

      _MegaMenuComponent.ɵfac = function MegaMenuComponent_Factory(t) {
        return new (t || _MegaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };

      _MegaMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MegaMenuComponent,
        selectors: [["app-mega-menu"]],
        decls: 21,
        vars: 13,
        consts: [[1, "horizontal-menu"], [1, "mega-menu"], ["href", "javascript:void(0)", 1, "nav-link", 3, "click"], [3, "icon"], [1, "mega-menu-container", "nav-submenu", "menu-to-be-close"], [1, "container-fluid"], [1, "row"], [1, "col", "mega-box", "mobile-title", "d-none"], [3, "icon", "click"], ["class", "col mega-box", 4, "ngFor", "ngForOf"], [1, "level-menu"], [1, "header-level-menu", "menu-to-be-close"], [4, "ngFor", "ngForOf"], [1, "col", "mega-box"], [1, "link-section", "icon", 3, "click"], [3, "d-none", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"], ["href", "javascript:void(0);", 4, "ngIf"], ["class", "header-level-sub-menu", 4, "ngIf"], ["href", "javascript:void(0);"], [1, "header-level-sub-menu"]],
        template: function MegaMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MegaMenuComponent_Template_a_click_2_listener() {
              return ctx.megaMenuToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-feather-icons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Bonus Ui");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Mega menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-feather-icons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MegaMenuComponent_Template_app_feather_icons_click_12_listener() {
              return ctx.megaMenuToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MegaMenuComponent_div_13_Template, 6, 4, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MegaMenuComponent_Template_a_click_15_listener() {
              return ctx.levelMenuToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-feather-icons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Level Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MegaMenuComponent_li_20_Template, 6, 5, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.navServices.megaMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "layers");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.navServices.megaMenu ? "d-block" : "d-none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.megaItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.navServices.levelMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.navServices.levelMenu ? "d-block" : "d-none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.levelmenuitems);
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    95895:
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/message-box/message-box.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageBoxComponent": function MessageBoxComponent() {
          return (
            /* binding */
            _MessageBoxComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);

      var _MessageBoxComponent = /*#__PURE__*/function () {
        function _MessageBoxComponent() {
          _classCallCheck(this, _MessageBoxComponent);

          this.openMessageBox = false;
        }

        _createClass(_MessageBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMessageBox",
          value: function toggleMessageBox() {
            this.openMessageBox = !this.openMessageBox;
          }
        }]);

        return _MessageBoxComponent;
      }();

      _MessageBoxComponent.ɵfac = function MessageBoxComponent_Factory(t) {
        return new (t || _MessageBoxComponent)();
      };

      _MessageBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MessageBoxComponent,
        selectors: [["app-message-box"]],
        decls: 1,
        vars: 1,
        consts: [[3, "icon", "click"]],
        template: function MessageBoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-feather-icons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageBoxComponent_Template_app_feather_icons_click_0_listener() {
              return ctx.toggleMessageBox();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "message-square");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLWJveC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    32413:
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/my-account/my-account.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyAccountComponent": function MyAccountComponent() {
          return (
            /* binding */
            _MyAccountComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _MyAccountComponent = /*#__PURE__*/function () {
        function _MyAccountComponent(_Router) {
          _classCallCheck(this, _MyAccountComponent);

          // this.EmployeeName = localStorage.getItem("CamelgateName");
          // this.camle = JSON.parse(localStorage.getItem("companyId"));
          this._Router = _Router;
          this.EmployeeName = ""; // this.camle =this.companyId==null?  true:false
        }

        _createClass(_MyAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            var role = +localStorage.getItem("Authorization");
            console.log(role); // window.location.reload(); 

            localStorage.clear();

            this._Router.navigate(["/"]);
          }
        }, {
          key: "Profile",
          value: function Profile() {
            this.companyId = localStorage.getItem(""); // this._CompanyService.Data.next(this.companyId);
          }
        }]);

        return _MyAccountComponent;
      }();

      _MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) {
        return new (t || _MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _MyAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MyAccountComponent,
        selectors: [["app-my-account"]],
        decls: 21,
        vars: 12,
        consts: [[1, "media", "profile-media"], ["src", "assets/images/dashboard/userprofile.png", "width", "37", "height", "37", 1, "b-r-10"], [1, "media-body", "pt-2"], [1, "profile-dropdown", "onhover-show-div"], ["routerLink", "/content/admin/ChangePassword"], [3, "icon"], [3, "click"]],
        template: function MyAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-feather-icons", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountComponent_Template_li_click_15_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-feather-icons", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "Welcome"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.EmployeeName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, "Change password"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "log-in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, "Sign Out"), " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
        styles: ["span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  padding: 0 0.3em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0FBQUoiLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5zcGFuIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZzogIDAgLjNlbSAwIDA7XHJcbiAgICAgXHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    22666:
    /*!******************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/notification/notification.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationComponent": function NotificationComponent() {
          return (
            /* binding */
            _NotificationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);

      var _NotificationComponent = /*#__PURE__*/function () {
        function _NotificationComponent() {
          _classCallCheck(this, _NotificationComponent);

          this.openNotification = false;
        }

        _createClass(_NotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleNotificationMobile",
          value: function toggleNotificationMobile() {
            this.openNotification = !this.openNotification;
          }
        }]);

        return _NotificationComponent;
      }();

      _NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
        return new (t || _NotificationComponent)();
      };

      _NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NotificationComponent,
        selectors: [["app-notification"]],
        decls: 36,
        vars: 4,
        consts: [[1, "notification-box", 3, "click"], [3, "icon"], [1, "badge", "badge-pill", "badge-secondary"], [1, "notification-dropdown", "onhover-show-div"], [1, "f-18", "mb-0"], [1, "fa", "fa-circle-o", "mr-3", "font-primary"], [1, "pull-right"], [1, "fa", "fa-circle-o", "mr-3", "font-success"], [1, "fa", "fa-circle-o", "mr-3", "font-info"], [1, "fa", "fa-circle-o", "mr-3", "font-danger"], ["href", "#", 1, "btn", "btn-primary"]],
        template: function NotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_0_listener() {
              return ctx.toggleNotificationMobile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Notitications");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Delivery processing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "10 min.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Order Complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "1 hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Tickets Generated");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "3 hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Delivery Complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "6 hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Check all notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "bell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openNotification);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "bell");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    18249:
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/search/search.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchComponent": function SearchComponent() {
          return (
            /* binding */
            _SearchComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/nav.service */
      5897);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function SearchComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_4_div_1_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r3.removeFix();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", menuItem_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", menuItem_r2 == null ? null : menuItem_r2.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuItem_r2 == null ? null : menuItem_r2.title);
        }
      }

      function SearchComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_div_4_div_1_Template, 7, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx_r0.searchResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 3, ctx_r0.menuItems, 0, 8));
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var _SearchComponent = /*#__PURE__*/function () {
        function _SearchComponent(navServices) {
          var _this25 = this;

          _classCallCheck(this, _SearchComponent);

          this.navServices = navServices;
          this.searchResult = false;
          this.searchResultEmpty = false;
          this.navServices.items.subscribe(function (menuItems) {
            return _this25.items = menuItems;
          });
        }

        _createClass(_SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "searchToggle",
          value: function searchToggle() {
            this.navServices.search = false;
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            var _this26 = this;

            term ? this.addFix() : this.removeFix();
            if (!term) return this.menuItems = [];
            var items = [];
            term = term.toLowerCase();
            this.items.filter(function (menuItems) {
              if (!(menuItems === null || menuItems === void 0 ? void 0 : menuItems.title)) return false;

              if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
              }

              if (!menuItems.children) return false;
              menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                  subItems.icon = menuItems.icon;
                  items.push(subItems);
                }

                if (!subItems.children) return false;
                subItems.children.filter(function (suSubItems) {
                  if (suSubItems.title.toLowerCase().includes(term)) {
                    suSubItems.icon = menuItems.icon;
                    items.push(suSubItems);
                  }
                });
              });

              _this26.checkSearchResultEmpty(items);

              _this26.menuItems = items;
            });
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(items) {
            if (!items.length) this.searchResultEmpty = true;else this.searchResultEmpty = false;
          }
        }, {
          key: "addFix",
          value: function addFix() {
            this.searchResult = true;
            document.getElementsByTagName('body')[0].classList.add('offcanvas');
          }
        }, {
          key: "removeFix",
          value: function removeFix() {
            this.searchResult = false;
            this.text = "";
            document.getElementsByTagName('body')[0].classList.remove('offcanvas');
          }
        }]);

        return _SearchComponent;
      }();

      _SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || _SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };

      _SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SearchComponent,
        selectors: [["app-search"]],
        decls: 9,
        vars: 9,
        consts: [[1, "form-inline", "search-full"], [1, "form-group", "w-100"], ["type", "text", "autocomplete", "off", "placeholder", "Search..", 1, "form-control-plaintext", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], [1, "close-search", 3, "icon", "click"], ["class", "Typeahead-menu", "id", "search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], ["id", "search-outer", 1, "Typeahead-menu"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.text = $event;
            })("keyup", function SearchComponent_Template_input_keyup_2_listener() {
              return ctx.searchTerm(ctx.text);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-feather-icons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_app_feather_icons_click_3_listener() {
              return ctx.searchToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchComponent_div_4_Template, 3, 7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Opps!! There are no result found. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.navServices.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36290:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/header.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/nav.service */
      5897);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/layout.service */
      85682);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _elements_languages_languages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./elements/languages/languages.component */
      85607);
      /* harmony import */


      var _elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./elements/my-account/my-account.component */
      32413);

      function HeaderComponent_i_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 19);
        }
      }

      function HeaderComponent_i_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 20);
        }
      }

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(layout, navServices, document) {
          _classCallCheck(this, _HeaderComponent);

          this.layout = layout;
          this.navServices = navServices;
          this.document = document;
          this.layoutType = 'ltr';
          this.dark = this.layout.config.settings.layout_version == 'dark-only' ? true : false;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.elem = document.documentElement;
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
            this.navServices.megaMenu = false;
            this.navServices.levelMenu = false;
          }
        }, {
          key: "layoutToggle",
          value: function layoutToggle() {
            this.dark = !this.dark;
            this.layout.config.settings.layout_version = this.dark ? 'dark-only' : 'light';
          }
        }, {
          key: "searchToggle",
          value: function searchToggle() {
            this.navServices.search = true;
          }
        }, {
          key: "languageToggle",
          value: function languageToggle() {
            this.navServices.language = !this.navServices.language;
          }
        }, {
          key: "toggleFullScreen",
          value: function toggleFullScreen() {
            this.navServices.fullScreen = !this.navServices.fullScreen;

            if (this.navServices.fullScreen) {
              if (this.elem.requestFullscreen) {
                this.elem.requestFullscreen();
              } else if (this.elem.mozRequestFullScreen) {
                /* Firefox */
                this.elem.mozRequestFullScreen();
              } else if (this.elem.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.elem.webkitRequestFullscreen();
              } else if (this.elem.msRequestFullscreen) {
                /* IE/Edge */
                this.elem.msRequestFullscreen();
              }
            } else {
              if (!this.document.exitFullscreen) {
                this.document.exitFullscreen();
              } else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
              } else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
              } else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
              }
            }
          }
        }, {
          key: "customizeLayoutType",
          value: function customizeLayoutType(val) {
            this.layoutType = val;
            console.log(val);
            this.layout.config.settings.layout_type = val;

            if (val == 'rtl') {
              document.getElementsByTagName('html')[0].setAttribute('dir', val);
            } else {
              document.getElementsByTagName('html')[0].removeAttribute('dir');
            }
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 23,
        vars: 6,
        consts: [[1, "page-header"], [1, "header-wrapper", "row", "m-0"], [1, "header-logo-wrapper", 2, "cursor", "pointer"], [1, "logo-wrapper"], ["src", "assets/images/logo/logo.png", "alt", "", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "", 1, "img-fluid", "for-dark"], [1, "toggle-sidebar", 3, "click"], [1, "status_toggle", "middle", 3, "icon"], [1, "left-header", "col", "horizontal-wrapper", "pl-0"], [1, "nav-right", "col-8", "pull-right", "right-header", "p-0"], [1, "nav-menus"], [1, "language-nav", 3, "click"], [1, "mode", 3, "click"], ["class", "fa fa-moon-o", 4, "ngIf"], ["class", "fa fa-lightbulb-o", 4, "ngIf"], [1, "maximize"], ["href", "javascript:void(0)", 1, "text-dark", 3, "click"], [3, "icon"], [1, "profile-nav", "onhover-dropdown", "p-0"], [1, "fa", "fa-moon-o"], [1, "fa", "fa-lightbulb-o"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_7_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-feather-icons", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_12_listener() {
              return ctx.languageToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_15_listener() {
              return ctx.layoutToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, HeaderComponent_i_16_Template, 1, 0, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, HeaderComponent_i_17_Template, 1, 0, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
              return ctx.toggleFullScreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "app-feather-icons", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "app-my-account");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("close_icon", ctx.navServices.collapseSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.dark);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dark);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "maximize");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _elements_languages_languages_component__WEBPACK_IMPORTED_MODULE_3__.LanguagesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_4__.MyAccountComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    14649:
    /*!***********************************************************************!*\
      !*** ./src/app/shared/components/layout/content/content.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContentComponent": function ContentComponent() {
          return (
            /* binding */
            _ContentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! feather-icons */
      66379);
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/layout.service */
      85682);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/nav.service */
      5897);
      /* harmony import */


      var _data_router_animation_router_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../data/router-animation/router-animation */
      47028);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../header/header.component */
      36290);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      6664);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../footer/footer.component */
      66526);

      var _ContentComponent = /*#__PURE__*/function () {
        function _ContentComponent(route, navServices, layout) {
          var _this27 = this;

          _classCallCheck(this, _ContentComponent);

          this.route = route;
          this.navServices = navServices;
          this.layout = layout;
          this.route.queryParams.subscribe(function (params) {
            _this27.layout.config.settings.layout = params.layout ? params.layout : _this27.layout.config.settings.layout;
          });
        }

        _createClass(_ContentComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
            });
          }
        }, {
          key: "getRouterOutletState",
          value: function getRouterOutletState(outlet) {
            return outlet.isActivated ? outlet.activatedRoute : '';
          }
        }, {
          key: "layoutClass",
          get: function get() {
            switch (this.layout.config.settings.layout) {
              case "Dubai":
                return "compact-wrapper";

              case "London":
                return "only-body";

              case "Seoul":
                return "compact-wrapper modern-type";

              case "LosAngeles":
                return this.navServices.horizontal ? "horizontal-wrapper material-type" : "compact-wrapper material-type";

              case "Paris":
                return "compact-wrapper dark-sidebar";

              case "Tokyo":
                return "compact-sidebar";

              case "Madrid":
                return "compact-wrapper color-sidebar";

              case "Moscow":
                return "compact-sidebar compact-small";

              case "NewYork":
                return "compact-wrapper box-layout";

              case "Singapore":
                return this.navServices.horizontal ? "horizontal-wrapper enterprice-type" : "compact-wrapper enterprice-type";

              case "Rome":
                return "compact-sidebar compact-small material-icon";

              case "Barcelona":
                return this.navServices.horizontal ? "horizontal-wrapper enterprice-type advance-layout" : "compact-wrapper enterprice-type advance-layout";
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContentComponent;
      }();

      _ContentComponent.ɵfac = function ContentComponent_Factory(t) {
        return new (t || _ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
      };

      _ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ContentComponent,
        selectors: [["app-content"]],
        decls: 12,
        vars: 8,
        consts: [[3, "ngClass"], ["id", "canvas-bookmark", 1, "page-wrapper", 3, "ngClass"], [1, "page-body-wrapper"], [1, "sidebar-wrapper"], [1, "page-body"], ["o", "outlet"], [1, "footer"]],
        template: function ContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "router-outlet", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "footer", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.layout.config.settings.layout_version);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layout.config.settings.layout_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("close_icon", ctx.navServices.collapseSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("sidebar-layout", ctx.layout.config.settings.sidebar_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInAnimation", ctx.getRouterOutletState(_r0));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"],
        data: {
          animation: [_data_router_animation_router_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInAnimation]
        }
      });
      /***/
    },

    /***/
    210:
    /*!*****************************************************************!*\
      !*** ./src/app/shared/components/layout/full/full.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FullComponent": function FullComponent() {
          return (
            /* binding */
            _FullComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _FullComponent = /*#__PURE__*/function () {
        function _FullComponent() {
          _classCallCheck(this, _FullComponent);
        }

        _createClass(_FullComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FullComponent;
      }();

      _FullComponent.ɵfac = function FullComponent_Factory(t) {
        return new (t || _FullComponent)();
      };

      _FullComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FullComponent,
        selectors: [["app-full"]],
        decls: 2,
        vars: 0,
        consts: [[1, "page-wrapper"]],
        template: function FullComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    90605:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/loader/loader.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoaderComponent": function LoaderComponent() {
          return (
            /* binding */
            _LoaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LoaderComponent = /*#__PURE__*/function () {
        function _LoaderComponent() {
          var _this28 = this;

          _classCallCheck(this, _LoaderComponent);

          this.show = true;
          setTimeout(function () {
            _this28.show = false;
          }, 3000);
        }

        _createClass(_LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return _LoaderComponent;
      }();

      _LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || _LoaderComponent)();
      };

      _LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LoaderComponent,
        selectors: [["app-loader"]],
        decls: 8,
        vars: 2,
        consts: [[1, "loader-wrapper"], [1, "loader-index"], ["id", "goo"], ["in", "SourceGraphic", "stddeviation", "11", "result", "blur"], ["in", "blur", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9", "result", "goo"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "filter", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fegaussianblur", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fecolormatrix", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loderhide", !ctx.show);
          }
        },
        styles: [".loader-wrapper.loderhide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLXdyYXBwZXIubG9kZXJoaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    6664:
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/nav.service */
      5897);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/layout.service */
      85682);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      function SidebarComponent_li_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, menuItem_r2.headTitle1));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, menuItem_r2.headTitle2));
        }
      }

      function SidebarComponent_li_22_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r2.badgeType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.badgeValue);
        }
      }

      function SidebarComponent_li_22_a_3_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r2.active ? "down" : "right", " pull-right");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      function SidebarComponent_li_22_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_22_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

            var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.toggletNavActive(menuItem_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_22_a_3_i_6_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r2.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, menuItem_r2.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_a_5_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r2.active ? "down" : "right", " pull-right");
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function SidebarComponent_li_22_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_a_5_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r2.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !menuItem_r2.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, menuItem_r2.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, menuItem_r2.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_a_6_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r2.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_22_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_22_a_6_i_6_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r2.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !menuItem_r2.type ? null : menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, menuItem_r2.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_a_7_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r2.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_22_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_a_7_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r2.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !menuItem_r2.type ? null : menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", childrenItem_r28.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_22_ul_8_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);

            var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r36.toggletNavActive(childrenItem_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_ul_8_li_1_a_1_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, childrenItem_r28.title), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_2_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      var _c2 = function _c2() {
        return {
          exact: true
        };
      };

      function SidebarComponent_li_22_ul_8_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_22_ul_8_li_1_a_2_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !childrenItem_r28.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, childrenItem_r28.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, childrenItem_r28.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_3_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_22_ul_8_li_1_a_3_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenItem_r28.type ? null : childrenItem_r28.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, childrenItem_r28.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_4_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_22_ul_8_li_1_a_4_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenItem_r28.type ? null : childrenItem_r28.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenItem_r28.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !childrenSubItem_r47.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, childrenSubItem_r47.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenSubItem_r47.title), "");
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r47.type ? null : childrenSubItem_r47.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenSubItem_r47.title));
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r47.type ? null : childrenSubItem_r47.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, childrenSubItem_r47.title));
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_1_Template, 4, 8, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_2_Template, 4, 6, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_3_Template, 4, 4, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, childrenSubItem_r47.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r47.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r47.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r47.type === "extTabLink");
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "menu-open": a0,
          "menu-close": a1
        };
      };

      function SidebarComponent_li_22_ul_8_li_1_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_Template, 4, 6, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", childrenItem_r28.active ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, childrenItem_r28.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c3, childrenItem_r28.active, !childrenItem_r28.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_ul_8_li_1_a_1_Template, 6, 4, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_22_ul_8_li_1_a_2_Template, 5, 9, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_22_ul_8_li_1_a_3_Template, 5, 7, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_22_ul_8_li_1_a_4_Template, 5, 5, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_ul_8_li_1_ul_5_Template, 2, 10, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, childrenItem_r28.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_ul_8_li_1_Template, 6, 8, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", menuItem_r2.active ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, menuItem_r2.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c3, menuItem_r2.active, !menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_div_1_Template, 7, 6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_22_label_2_Template, 2, 4, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_22_a_3_Template, 7, 10, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_a_5_Template, 6, 12, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_22_a_6_Template, 7, 11, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SidebarComponent_li_22_a_7_Template, 6, 9, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SidebarComponent_li_22_ul_8_Template, 2, 10, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](menuItem_r2.headTitle1 ? "sidebar-main-title" : "sidebar-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.headTitle1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.badgeType && menuItem_r2.badgeValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", menuItem_r2.path, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, menuItem_r56.headTitle1));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, menuItem_r56.headTitle2));
        }
      }

      function SidebarComponent_li_23_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r56.badgeType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r56.badgeValue);
        }
      }

      function SidebarComponent_li_23_a_3_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r56.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_23_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);

            var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r68.toggletNavActive(menuItem_r56);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_23_a_3_i_6_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r56.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r56.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, menuItem_r56.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_a_4_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r56.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_a_4_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r56.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !menuItem_r56.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, menuItem_r56.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, menuItem_r56.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_a_5_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r56.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_23_a_5_i_6_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r56.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !menuItem_r56.type ? null : menuItem_r56.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r56.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, menuItem_r56.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_a_6_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r56.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_a_6_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r56.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !menuItem_r56.type ? null : menuItem_r56.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r56.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r56.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", childrenItem_r82.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_23_ul_7_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92);

            var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r90.toggletNavActive(childrenItem_r82);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_ul_7_li_1_a_1_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, childrenItem_r82.title), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_2_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_ul_7_li_1_a_2_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !childrenItem_r82.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, childrenItem_r82.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, childrenItem_r82.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_3_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_ul_7_li_1_a_3_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenItem_r82.type ? null : childrenItem_r82.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, childrenItem_r82.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_4_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_ul_7_li_1_a_4_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenItem_r82.type ? null : childrenItem_r82.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenItem_r82.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !childrenSubItem_r101.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, childrenSubItem_r101.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenSubItem_r101.title), "");
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r101.type ? null : childrenSubItem_r101.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenSubItem_r101.title));
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r101.type ? null : childrenSubItem_r101.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, childrenSubItem_r101.title));
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_1_Template, 4, 8, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_2_Template, 4, 6, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_3_Template, 4, 4, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r101 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, childrenSubItem_r101.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r101.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r101.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r101.type === "extTabLink");
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_Template, 4, 6, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", childrenItem_r82.active ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, childrenItem_r82.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c3, childrenItem_r82.active, !childrenItem_r82.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_ul_7_li_1_a_1_Template, 6, 4, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_23_ul_7_li_1_a_2_Template, 5, 9, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_23_ul_7_li_1_a_3_Template, 5, 7, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_ul_7_li_1_a_4_Template, 5, 5, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_ul_7_li_1_ul_5_Template, 2, 10, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, childrenItem_r82.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_ul_7_li_1_Template, 6, 8, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", menuItem_r56.active ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, menuItem_r56.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c3, menuItem_r56.active, !menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_div_1_Template, 7, 6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_23_label_2_Template, 2, 4, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_23_a_3_Template, 7, 10, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_a_4_Template, 6, 12, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_a_5_Template, 7, 11, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_23_a_6_Template, 6, 9, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SidebarComponent_li_23_ul_7_Template, 2, 10, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](menuItem_r56.headTitle1 ? "sidebar-main-title" : "sidebar-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.headTitle1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.badgeType && menuItem_r56.badgeValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      var _c4 = function _c4(a0) {
        return {
          marginLeft: a0
        };
      };

      var _SidebarComponent = /*#__PURE__*/function () {
        function _SidebarComponent(router, navServices, layout) {
          var _this29 = this;

          _classCallCheck(this, _SidebarComponent);

          this.router = router;
          this.navServices = navServices;
          this.layout = layout; // For Horizontal Menu

          this.margin = 0;
          this.width = window.innerWidth;
          this.leftArrowNone = true;
          this.rightArrowNone = false;
          this.Role = localStorage.getItem('RiskRole'); // this.UserRole =  Roles.Agent;

          this.navServices.items.subscribe(function (res) {
            _this29.menuRolus = res; // this.navServices.itemss.subscribe((res)=>{
            //   this.donationRolus = res
            // })

            _this29.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                res.filter(function (items) {
                  if (items.path === event.url) {
                    _this29.setNavActive(items);
                  }

                  if (!items.children) {
                    return false;
                  }

                  items.children.filter(function (subItems) {
                    if (subItems.path === event.url) {
                      _this29.setNavActive(subItems);
                    }

                    if (!subItems.children) {
                      return false;
                    }

                    subItems.children.filter(function (subSubItems) {
                      if (subSubItems.path === event.url) {
                        _this29.setNavActive(subSubItems);
                      }
                    });
                  });
                });
              }
            });
          });
        }

        _createClass(_SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.width = event.target.innerWidth - 500;
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
          } // Active Nave state

        }, {
          key: "setNavActive",
          value: function setNavActive(item) {
            this.menuItems.filter(function (menuItem) {
              if (menuItem !== item) {
                menuItem.active = false;
              }

              if (menuItem.children && menuItem.children.includes(item)) {
                menuItem.active = true;
              }

              if (menuItem.children) {
                menuItem.children.filter(function (submenuItems) {
                  if (submenuItems.children && submenuItems.children.includes(item)) {
                    menuItem.active = true;
                    submenuItems.active = true;
                  }
                });
              }
            });
          } // Click Toggle menu

        }, {
          key: "toggletNavActive",
          value: function toggletNavActive(item) {
            var _this30 = this;

            if (!item.active) {
              this.menuRolus.forEach(function (a) {
                if (_this30.menuRolus.includes(item)) {
                  a.active = false;
                }

                if (!a.children) {
                  return false;
                }

                a.children.forEach(function (b) {
                  if (a.children.includes(item)) {
                    b.active = false;
                  }
                });
              });
            }

            item.active = !item.active;
          } // For Horizontal Menu

        }, {
          key: "scrollToLeft",
          value: function scrollToLeft() {
            if (this.margin >= -this.width) {
              this.margin = 0;
              this.leftArrowNone = true;
              this.rightArrowNone = false;
            } else {
              this.margin += this.width;
              this.rightArrowNone = false;
            }
          }
        }, {
          key: "scrollToRight",
          value: function scrollToRight() {
            if (this.margin <= -3051) {
              this.margin = -3464;
              this.leftArrowNone = false;
              this.rightArrowNone = true;
            } else {
              this.margin += -this.width;
              this.leftArrowNone = false;
            }
          }
        }, {
          key: "counter",
          value: function counter(i) {
            return new Array(i);
          }
        }]);

        return _SidebarComponent;
      }();

      _SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
      };

      _SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        decls: 26,
        vars: 12,
        consts: [[1, "logo-wrapper"], ["src", "", "alt", "", 1, "img-fluid", "for-light", 2, "width", "70%"], ["src", "", "alt", "", 1, "img-fluid", "for-dark", 2, "width", "70%"], [1, "back-btn", 3, "click"], [1, "fa", "fa-angle-left"], [1, "toggle-sidebar", 3, "click"], [1, "status_toggle", "middle", "sidebar-toggle", 3, "icon"], [1, "logo-icon-wrapper"], ["href", "javascript:void(0)"], ["src", "assets/images/logo/logo-icon.png", "alt", "", 1, "img-fluid"], [1, "sidebar-main"], ["id", "left-arrow", 1, "left-arrow", 3, "click"], [3, "icon"], ["id", "sidebar-menu", 3, "ngStyle"], [1, "sidebar-links", "custom-scrollbar"], [1, "back-btn"], [1, "mobile-back", "text-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right", "pl-2"], ["class", "text-capitalize", 3, "class", "ngClass", 4, "ngFor", "ngForOf"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], ["id", "right-arrow", 1, "right-arrow", 3, "click"], [1, "text-capitalize", 3, "ngClass"], [4, "ngIf"], [3, "class", 4, "ngIf"], ["href", "javascript:void(0)", "class", "sidebar-link sidebar-title", 3, "link-nav", "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "sidebar-link sidebar-title", 3, "routerLink", "link-nav", "ngClass", 4, "ngIf"], ["class", "sidebar-link sidebar-title", 3, "href", "link-nav", "ngClass", 4, "ngIf"], ["target", "_blank", "class", "sidebar-link sidebar-title", 3, "href", "link-nav", "ngClass", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", "display", 4, "ngIf"], [1, "lan-1"], [1, "lan-2"], ["href", "javascript:void(0)", 1, "sidebar-link", "sidebar-title", 3, "ngClass", "click"], [1, "according-menu"], ["routerLinkActive", "active", 1, "sidebar-link", "sidebar-title", 3, "routerLink", "ngClass"], [2, "text-transform", "capitalize !important"], [1, "sidebar-link", "sidebar-title", 3, "href", "ngClass"], ["target", "_blank", 1, "sidebar-link", "sidebar-title", 3, "href", "ngClass"], [1, "sidebar-submenu", 3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "submenu-title", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "submenu-title", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["class", "submenu-title", "routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["class", "submenu-title", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "nav-sub-childmenu submenu-content", 3, "ngClass", "display", 4, "ngIf"], ["href", "javascript:void(0)", 1, "submenu-title", 3, "click"], ["routerLinkActive", "active", 1, "submenu-title", 3, "routerLink", "routerLinkActiveOptions"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 1, "submenu-title", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 1, "submenu-title", 3, "href"], [1, "nav-sub-childmenu", "submenu-content", 3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_3_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_5_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-feather-icons", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nav", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_11_listener() {
              return ctx.scrollToLeft();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_18_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SidebarComponent_li_22_Template, 9, 13, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SidebarComponent_li_23_Template, 8, 12, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_24_listener() {
              return ctx.scrollToRight();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("d-none", ctx.leftArrowNone);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c4, ctx.layout.config.settings.layout == "Rome" || "Singapore" || "Barcelona" ? ctx.margin + "px" : "0px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menuRolus);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.donationRolus);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("d-none", ctx.rightArrowNone);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    61916:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TapToTopComponent": function TapToTopComponent() {
          return (
            /* binding */
            _TapToTopComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);

      var _c0 = function _c0(a0) {
        return {
          "display": a0
        };
      };

      var _TapToTopComponent = /*#__PURE__*/function () {
        function _TapToTopComponent(viewScroller) {
          _classCallCheck(this, _TapToTopComponent);

          this.viewScroller = viewScroller;
          this.show = false;
        }

        _createClass(_TapToTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // @HostListener Decorator

        }, {
          key: "onWindowScroll",
          value: function onWindowScroll() {
            var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            if (number > 600) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
        }, {
          key: "tapToTop",
          value: function tapToTop() {
            this.viewScroller.scrollToPosition([0, 0]);
          }
        }]);

        return _TapToTopComponent;
      }();

      _TapToTopComponent.ɵfac = function TapToTopComponent_Factory(t) {
        return new (t || _TapToTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller));
      };

      _TapToTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TapToTopComponent,
        selectors: [["app-tap-to-top"]],
        hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
              return ctx.onWindowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 2,
        vars: 4,
        consts: [[1, "tap-top", 3, "ngStyle", "click"], [3, "icon"]],
        template: function TapToTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TapToTopComponent_Template_div_click_0_listener() {
              return ctx.tapToTop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.show ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "chevrons-up");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXAtdG8tdG9wLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    47028:
    /*!******************************************************************!*\
      !*** ./src/app/shared/data/router-animation/router-animation.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fadeInAnimation": function fadeInAnimation() {
          return (
            /* binding */
            _fadeInAnimation
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      17238);

      var _fadeInAnimation = (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInAnimation', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        position: 'relative'
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '0'
      })], {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.2s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '0'
      }))], {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.2s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '1'
      }))], {
        delay: 300,
        optional: true
      })]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
        optional: true
      })])]);
      /***/

    },

    /***/
    87500:
    /*!******************************************************************!*\
      !*** ./src/app/shared/directives/disable-key-press.directive.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisableKeyPressDirective": function DisableKeyPressDirective() {
          return (
            /* binding */
            _DisableKeyPressDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DisableKeyPressDirective = /*#__PURE__*/function () {
        function _DisableKeyPressDirective() {
          _classCallCheck(this, _DisableKeyPressDirective);

          this.autocomplete = 'off';
        }

        _createClass(_DisableKeyPressDirective, [{
          key: "disableKeys",
          value: function disableKeys(event) {
            event.preventDefault();
          }
        }]);

        return _DisableKeyPressDirective;
      }();

      _DisableKeyPressDirective.ɵfac = function DisableKeyPressDirective_Factory(t) {
        return new (t || _DisableKeyPressDirective)();
      };

      _DisableKeyPressDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DisableKeyPressDirective,
        selectors: [["", "disableKeyPress", ""]],
        hostVars: 1,
        hostBindings: function DisableKeyPressDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DisableKeyPressDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    53732:
    /*!************************************************************************!*\
      !*** ./src/app/shared/directives/disable-weriting-arabic.directive.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisableWeritingArabicDirective": function DisableWeritingArabicDirective() {
          return (
            /* binding */
            _DisableWeritingArabicDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DisableWeritingArabicDirective = /*#__PURE__*/function () {
        function _DisableWeritingArabicDirective() {
          _classCallCheck(this, _DisableWeritingArabicDirective);

          this.autocomplete = 'off';
        }

        _createClass(_DisableWeritingArabicDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            var stringAllow = /^[-\sa-zA-Z,0-9]+$/;
            var inputChar = e.key;

            if (!stringAllow.test(inputChar)) {
              e.preventDefault();
            }
          }
        }]);

        return _DisableWeritingArabicDirective;
      }();

      _DisableWeritingArabicDirective.ɵfac = function DisableWeritingArabicDirective_Factory(t) {
        return new (t || _DisableWeritingArabicDirective)();
      };

      _DisableWeritingArabicDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DisableWeritingArabicDirective,
        selectors: [["", "appDisableWeritingArabic", ""]],
        hostVars: 1,
        hostBindings: function DisableWeritingArabicDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DisableWeritingArabicDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    45347:
    /*!*************************************************************************!*\
      !*** ./src/app/shared/directives/disable-weriting-english.directive.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisableWeritingEnglishDirective": function DisableWeritingEnglishDirective() {
          return (
            /* binding */
            _DisableWeritingEnglishDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DisableWeritingEnglishDirective = /*#__PURE__*/function () {
        function _DisableWeritingEnglishDirective() {
          _classCallCheck(this, _DisableWeritingEnglishDirective);

          this.autocomplete = 'off';
        }

        _createClass(_DisableWeritingEnglishDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            var stringAllow = /^[-\s,\u0600-\u06FF,0-9]+$/;
            var inputChar = e.key;

            if (!stringAllow.test(inputChar)) {
              e.preventDefault();
            }
          }
        }]);

        return _DisableWeritingEnglishDirective;
      }();

      _DisableWeritingEnglishDirective.ɵfac = function DisableWeritingEnglishDirective_Factory(t) {
        return new (t || _DisableWeritingEnglishDirective)();
      };

      _DisableWeritingEnglishDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DisableWeritingEnglishDirective,
        selectors: [["", "appDisableWeritingEnglish", ""]],
        hostVars: 1,
        hostBindings: function DisableWeritingEnglishDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DisableWeritingEnglishDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    33177:
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/only-alphabets.directive.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnlyAlphabetsDirective": function OnlyAlphabetsDirective() {
          return (
            /* binding */
            _OnlyAlphabetsDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _OnlyAlphabetsDirective = /*#__PURE__*/function () {
        function _OnlyAlphabetsDirective() {
          _classCallCheck(this, _OnlyAlphabetsDirective);

          this.autocomplete = 'off';
        }

        _createClass(_OnlyAlphabetsDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            document.all ? e.keyCode : e.keyCode;
            return e.keyCode === 8 || e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode >= 65 && e.keyCode <= 90;
          }
        }]);

        return _OnlyAlphabetsDirective;
      }();

      _OnlyAlphabetsDirective.ɵfac = function OnlyAlphabetsDirective_Factory(t) {
        return new (t || _OnlyAlphabetsDirective)();
      };

      _OnlyAlphabetsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OnlyAlphabetsDirective,
        selectors: [["", "onlyAlphabets", ""]],
        hostVars: 1,
        hostBindings: function OnlyAlphabetsDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OnlyAlphabetsDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    59112:
    /*!***********************************************************!*\
      !*** ./src/app/shared/directives/only-dates.directive.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnlyDatesDirective": function OnlyDatesDirective() {
          return (
            /* binding */
            _OnlyDatesDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _OnlyDatesDirective = /*#__PURE__*/function () {
        function _OnlyDatesDirective() {
          _classCallCheck(this, _OnlyDatesDirective);

          this.autocomplete = 'off';
        }

        _createClass(_OnlyDatesDirective, [{
          key: "Date",
          value: function Date(e) {
            document.all ? e.keyCode : e.keyCode;

            if (e.target.value <= '1930-01-01') {
              e.target.value = '1930-01-01';
            }
          }
        }]);

        return _OnlyDatesDirective;
      }();

      _OnlyDatesDirective.ɵfac = function OnlyDatesDirective_Factory(t) {
        return new (t || _OnlyDatesDirective)();
      };

      _OnlyDatesDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OnlyDatesDirective,
        selectors: [["", "appOnlyDates", ""]],
        hostVars: 1,
        hostBindings: function OnlyDatesDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function OnlyDatesDirective_blur_HostBindingHandler($event) {
              return ctx.Date($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    5262:
    /*!*************************************************************!*\
      !*** ./src/app/shared/directives/only-numbers.directive.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnlyNumbersDirective": function OnlyNumbersDirective() {
          return (
            /* binding */
            _OnlyNumbersDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _OnlyNumbersDirective = /*#__PURE__*/function () {
        function _OnlyNumbersDirective() {
          _classCallCheck(this, _OnlyNumbersDirective);

          this.autocomplete = 'off';
        }

        _createClass(_OnlyNumbersDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            document.all ? e.keyCode : e.keyCode; // let y = this.x.test( e.keyCode)

            return e.keyCode == 8 || e.keyCode >= 48 && e.keyCode <= 57;
          }
        }]);

        return _OnlyNumbersDirective;
      }();

      _OnlyNumbersDirective.ɵfac = function OnlyNumbersDirective_Factory(t) {
        return new (t || _OnlyNumbersDirective)();
      };

      _OnlyNumbersDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OnlyNumbersDirective,
        selectors: [["", "onlyNumbers", ""]],
        hostVars: 1,
        hostBindings: function OnlyNumbersDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OnlyNumbersDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    84177:
    /*!*************************************************************!*\
      !*** ./src/app/shared/directives/show-options.directive.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowOptionsDirective": function ShowOptionsDirective() {
          return (
            /* binding */
            _ShowOptionsDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ShowOptionsDirective = /*#__PURE__*/function () {
        function _ShowOptionsDirective(elRef, renderer) {
          _classCallCheck(this, _ShowOptionsDirective);

          this.elRef = elRef;
          this.renderer = renderer;
          this.options = false;
        }

        _createClass(_ShowOptionsDirective, [{
          key: "openOptions",
          value: function openOptions() {
            this.options = !this.options;
          }
        }, {
          key: "setStyle",
          value: function setStyle() {
            this.options = this.options === true ? false : true;

            if (this.options) {
              this.renderer.setStyle(this.elRef.nativeElement, 'width', '230px');
            } else {
              this.renderer.setStyle(this.elRef.nativeElement, 'width', '35px');
            }
          }
        }]);

        return _ShowOptionsDirective;
      }();

      _ShowOptionsDirective.ɵfac = function ShowOptionsDirective_Factory(t) {
        return new (t || _ShowOptionsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      _ShowOptionsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ShowOptionsDirective,
        selectors: [["", "appShowOptions", ""]],
        hostBindings: function ShowOptionsDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowOptionsDirective_click_HostBindingHandler() {
              return ctx.openOptions();
            });
          }
        }
      });
      /***/
    },

    /***/
    31762:
    /*!****************************************************!*\
      !*** ./src/app/shared/guard/is-not-login.guard.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IsNotLoginGuard": function IsNotLoginGuard() {
          return (
            /* binding */
            _IsNotLoginGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _IsNotLoginGuard = /*#__PURE__*/function () {
        function _IsNotLoginGuard(_Router) {
          _classCallCheck(this, _IsNotLoginGuard);

          this._Router = _Router;
        }

        _createClass(_IsNotLoginGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (localStorage.getItem("Authorization") == null) {
              return true;
            } else {
              this._Router.navigate(["/content/admin"]);

              return false;
            }
          }
        }]);

        return _IsNotLoginGuard;
      }();

      _IsNotLoginGuard.ɵfac = function IsNotLoginGuard_Factory(t) {
        return new (t || _IsNotLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _IsNotLoginGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _IsNotLoginGuard,
        factory: _IsNotLoginGuard.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    46382:
    /*!*****************************************!*\
      !*** ./src/app/shared/routes/routes.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "content": function content() {
          return (
            /* binding */
            _content
          );
        }
        /* harmony export */

      });

      var _content = [// {
      //   path: 'sample-page',
      //   // loadChildren: () => import('../../components/sample/sample.module').then(m => m.SampleModule)
      //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
      // },
      {
        path: 'admin',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/admin/admin.module */
          81100)).then(function (m) {
            return m.AdminModule;
          });
        }
      } // {
      //   path: 'agent',
      //   // loadChildren: () => import('../../components/Agent/agent-module.module').then(m => m.AgentModuleModule)
      //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
      // },
      // {
      //   path: 'donation',
      //   // loadChildren: () => import('../../components/donation/donation.module').then(m=> m.DonationModule)
      //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
      // },
      // {
      //   path: 'collectormanager',
      //   // loadChildren: () => import('../../components/collectormanager/collectormanager.module').then(m=> m.CollectormanagerModule)
      //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
      // },
      ];
      /***/
    },

    /***/
    85682:
    /*!***************************************************!*\
      !*** ./src/app/shared/services/layout.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutService": function LayoutService() {
          return (
            /* binding */
            _LayoutService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LayoutService = /*#__PURE__*/_createClass(function _LayoutService() {
        _classCallCheck(this, _LayoutService);

        this.language = "en";
        this.config = {
          settings: {
            layout: "Dubai",
            layout_type: "ltr",
            layout_version: "light-only",
            sidebar_type: "default-sidebar"
          },
          color: {
            primary_color: "#48267F",
            secondary_color: "#EE7A24"
          }
        };
        if (this.config.settings.layout_type == "rtl") document.getElementsByTagName("html")[0].setAttribute("dir", this.config.settings.layout_type);
        document.documentElement.style.setProperty("--theme-deafult", this.config.color.primary_color);
        document.documentElement.style.setProperty("--theme-secondary", this.config.color.secondary_color);
      });

      _LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || _LayoutService)();
      };

      _LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LayoutService,
        factory: _LayoutService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    5897:
    /*!************************************************!*\
      !*** ./src/app/shared/services/nav.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavService": function NavService() {
          return (
            /* binding */
            _NavService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _NavService = /*#__PURE__*/function () {
        function _NavService(router) {
          var _this31 = this;

          _classCallCheck(this, _NavService);

          this.router = router;
          this.unsubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.screenWidth = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(window.innerWidth); // Search Box

          this.search = false; // Language

          this.language = false; // Mega Menu

          this.megaMenu = false;
          this.levelMenu = false;
          this.megaMenuColapse = window.innerWidth < 1199 ? true : false; // For Horizontal Layout Mobile

          this.horizontal = window.innerWidth < 991 ? false : true; // Collapse Sidebar

          this.collapseSidebar = window.innerWidth < 991 ? true : false; // Full screen

          this.fullScreen = false;
          this.Role = localStorage.getItem("CamlRole");
          this.RoleCamlGATE = 1; // private admin only

          this.RoleCamlEmployee = 2; // private admin only

          this.RoleCompany = 5; // private Company only

          this.RoleCompanyEmployee = 3; // private Company only

          this.RoledCompanyTruck = 6; // private CompanyTruck  only

          this.RoledCompanyTruckEmployee = 4; // private CompanyTruck  only

          this.MENUITEMS_andalus = [{
            headTitle1: "مجموعة بروكسي",
            headTitle2: "شاشة الإدارة"
          }, {
            title: "الخدمات",
            icon: "activity",
            type: "sub",
            badgeType: "success",
            children: [{
              path: "admin/ViewService",
              title: "عرض الخدمات",
              type: "link"
            }]
          }, {
            title: "من نحن",
            icon: "activity",
            type: "sub",
            badgeType: "success",
            children: [{
              path: "admin/ViewAboutus",
              title: "عرض من نحن",
              type: "link"
            }]
          }, {
            title: "تفاصيل العمل",
            icon: "activity",
            type: "sub",
            badgeType: "success",
            children: [{
              path: "admin/ViewDetailsofwork",
              title: "عرض تفاصيل العمل",
              type: "link"
            }]
          }, {
            title: "تفاصيل شركاء النجاح",
            icon: "activity",
            type: "sub",
            badgeType: "success",
            children: [{
              path: "admin/ViewListPartner",
              title: "عرض شركاء النجاح",
              type: "link"
            }]
          }]; // ===============

          this.MEGAMENUITEMS = [{
            title: "Error Pages",
            type: "sub",
            active: true,
            children: [{
              path: "javascript:void(0);",
              title: "Error Page 400",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 401",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 403",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 404",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 500",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 503",
              type: "extLink"
            }]
          }, {
            title: "Authentication",
            type: "sub",
            active: false,
            children: [{
              path: "javascript:void(0);",
              title: "Login Simple",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Login BG Image",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Login BG Video",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Simple Register",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Register BG Image",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Register BG Video",
              type: "extLink"
            }]
          }, {
            title: "Usefull Pages",
            type: "sub",
            active: false,
            children: [{
              path: "javascript:void(0);",
              title: "Search Pages",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Unlock User",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Forgot Password",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Reset Password",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Maintenance",
              type: "extLink"
            }]
          }, {
            title: "Email templates",
            type: "sub",
            active: false,
            children: [{
              path: "http://admin.pixelstrap.com/cuba/theme/basic-template.html",
              title: "Basic Email",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/email-header.html",
              title: "Basic With Header",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/template-email.html",
              title: "Ecomerce Template",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/template-email-2.html",
              title: "Email Template 2",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/ecommerce-templates.html",
              title: "Ecommerce Email",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/email-order-success.html",
              title: "Order Success",
              type: "extTabLink"
            }]
          }, {
            title: "Coming Soon",
            type: "sub",
            active: false,
            children: [{
              path: "javascript:void(0);",
              title: "Coming Simple",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Coming BG Image",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Coming BG Video",
              type: "extLink"
            }]
          }];
          this.LEVELMENUITEMS = [{
            path: "javascript:void(0);",
            title: "File Manager",
            icon: "git-pull-request",
            type: "extLink"
          }, {
            title: "Users",
            icon: "users",
            type: "sub",
            active: false,
            children: [{
              path: "javascript:void(0);",
              title: "All Users",
              icon: "users",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "User Profile",
              icon: "users",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Edit Profile",
              icon: "users",
              type: "extLink"
            }]
          }, {
            path: "javascript:void(0);",
            title: "Bookmarks",
            icon: "heart",
            type: "extLink"
          }, {
            path: "javascript:void(0);",
            title: "Calender",
            icon: "calendar",
            type: "extLink"
          }, {
            path: "javascript:void(0);",
            title: "Social App",
            icon: "zap",
            type: "extLink"
          }];
          this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS_andalus);
          this.megaItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MEGAMENUITEMS);
          this.levelmenuitems = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.LEVELMENUITEMS);
          this.setScreenWidth(window.innerWidth);
          (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, "resize").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscriber)).subscribe(function (evt) {
            _this31.setScreenWidth(evt.target.innerWidth);

            if (evt.target.innerWidth < 991) {
              _this31.collapseSidebar = true;
              _this31.megaMenu = false;
              _this31.levelMenu = false;
            }

            if (evt.target.innerWidth < 1199) {
              _this31.megaMenuColapse = true;
            }
          });

          if (window.innerWidth < 991) {
            // Detect Route change sidebar close
            this.router.events.subscribe(function (event) {
              _this31.collapseSidebar = true;
              _this31.megaMenu = false;
              _this31.levelMenu = false;
            });
          }
        }

        _createClass(_NavService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscriber.next();
            this.unsubscriber.complete();
          }
        }, {
          key: "setScreenWidth",
          value: function setScreenWidth(width) {
            this.screenWidth.next(width);
          }
        }]);

        return _NavService;
      }();

      _NavService.ɵfac = function NavService_Factory(t) {
        return new (t || _NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _NavService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _NavService,
        factory: _NavService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      27995);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ng2-dragula */
      88989);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      66526);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/header/header.component */
      36290);
      /* harmony import */


      var _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/layout/content/content.component */
      14649);
      /* harmony import */


      var _components_layout_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/layout/full/full.component */
      210);
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/loader/loader.component */
      90605);
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      6664);
      /* harmony import */


      var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/tap-to-top/tap-to-top.component */
      61916);
      /* harmony import */


      var _components_header_elements_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/header/elements/search/search.component */
      18249);
      /* harmony import */


      var _components_header_elements_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/header/elements/mega-menu/mega-menu.component */
      54399);
      /* harmony import */


      var _components_header_elements_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/header/elements/languages/languages.component */
      85607);
      /* harmony import */


      var _components_header_elements_notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/header/elements/notification/notification.component */
      22666);
      /* harmony import */


      var _components_header_elements_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/header/elements/bookmark/bookmark.component */
      38400);
      /* harmony import */


      var _components_header_elements_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/header/elements/cart/cart.component */
      88204);
      /* harmony import */


      var _components_header_elements_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/header/elements/message-box/message-box.component */
      95895);
      /* harmony import */


      var _components_header_elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/header/elements/my-account/my-account.component */
      32413);
      /* harmony import */


      var _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./directives/disable-key-press.directive */
      87500);
      /* harmony import */


      var _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./directives/only-alphabets.directive */
      33177);
      /* harmony import */


      var _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./directives/only-numbers.directive */
      5262);
      /* harmony import */


      var _directives_show_options_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./directives/show-options.directive */
      84177);
      /* harmony import */


      var _directives_only_dates_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./directives/only-dates.directive */
      59112);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./services/layout.service */
      85682);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/nav.service */
      5897);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      45675);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      25367);
      /* harmony import */


      var _directives_disable_weriting_english_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./directives/disable-weriting-english.directive */
      45347);
      /* harmony import */


      var _directives_disable_weriting_arabic_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./directives/disable-weriting-arabic.directive */
      53732);
      /* harmony import */


      var _Pipes_exp_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./Pipes/exp.pipe */
      6210);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _Models_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./Models/login/login.component */
      86022);
      /* harmony import */


      var _components_check_date_check_date_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/check-date/check-date.component */
      71889);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/core */
      37716); // Components
      // Header Elements Components
      // Directives
      //product services
      // Services
      // import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


      var _SharedModule = /*#__PURE__*/_createClass(function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      });

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
        providers: [_services_nav_service__WEBPACK_IMPORTED_MODULE_23__.NavService, _services_layout_service__WEBPACK_IMPORTED_MODULE_22__.LayoutService],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__.ModalModule.forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_36__.DragulaModule.forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__.BsDatepickerModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__.NgSelectModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__.TooltipModule.forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__.PaginationModule.forRoot()], _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__.BsDatepickerModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__.ModalModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__.NgSelectModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__.TooltipModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__.PaginationModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.SidebarComponent, _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _components_layout_full_full_component__WEBPACK_IMPORTED_MODULE_5__.FullComponent, _directives_show_options_directive__WEBPACK_IMPORTED_MODULE_20__.ShowOptionsDirective, _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__.DisableKeyPressDirective, _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__.OnlyAlphabetsDirective, _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__.OnlyNumbersDirective, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_8__.TapToTopComponent, _components_header_elements_search_search_component__WEBPACK_IMPORTED_MODULE_9__.SearchComponent, _components_header_elements_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_10__.MegaMenuComponent, _components_header_elements_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__.LanguagesComponent, _components_header_elements_notification_notification_component__WEBPACK_IMPORTED_MODULE_12__.NotificationComponent, _components_header_elements_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__.BookmarkComponent, _components_header_elements_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__.CartComponent, _components_header_elements_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_15__.MessageBoxComponent, _components_header_elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_16__.MyAccountComponent, _directives_only_dates_directive__WEBPACK_IMPORTED_MODULE_21__.OnlyDatesDirective, _directives_disable_weriting_english_directive__WEBPACK_IMPORTED_MODULE_24__.DisableWeritingEnglishDirective, _directives_disable_weriting_arabic_directive__WEBPACK_IMPORTED_MODULE_25__.DisableWeritingArabicDirective, _Pipes_exp_pipe__WEBPACK_IMPORTED_MODULE_26__.ExpPipe, _Models_login_login_component__WEBPACK_IMPORTED_MODULE_27__.LoginComponent, _components_check_date_check_date_component__WEBPACK_IMPORTED_MODULE_28__.CheckDateComponent],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__.ModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_36__.DragulaModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__.BsDatepickerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__.NgSelectModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__.TooltipModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__.PaginationModule],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_8__.TapToTopComponent, _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__.DisableKeyPressDirective, _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__.OnlyAlphabetsDirective, _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__.OnlyNumbersDirective, _directives_only_dates_directive__WEBPACK_IMPORTED_MODULE_21__.OnlyDatesDirective, _directives_disable_weriting_english_directive__WEBPACK_IMPORTED_MODULE_24__.DisableWeritingEnglishDirective, _directives_disable_weriting_arabic_directive__WEBPACK_IMPORTED_MODULE_25__.DisableWeritingArabicDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__.BsDatepickerModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__.ModalModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__.NgSelectModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__.TooltipModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__.PaginationModule, _Pipes_exp_pipe__WEBPACK_IMPORTED_MODULE_26__.ExpPipe]
        });
      })();
      /***/

    },

    /***/
    68077:
    /*!**********************************************!*\
      !*** ./src/app/token-interceptor.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenInterceptorService": function TokenInterceptorService() {
          return (
            /* binding */
            _TokenInterceptorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TokenInterceptorService = /*#__PURE__*/function () {
        function _TokenInterceptorService(injector) {
          _classCallCheck(this, _TokenInterceptorService);

          this.injector = injector;
        }

        _createClass(_TokenInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = localStorage.getItem('Authorization');

            if (token) {
              req = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(req);
          }
        }]);

        return _TokenInterceptorService;
      }();

      _TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
        return new (t || _TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      };

      _TokenInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _TokenInterceptorService,
        factory: _TokenInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    89019:
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app/shared/services/layout.service */
      85682);

      console.log("Simple Injector Example"); // src/app/shared/services/layout.service

      var injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector.create([{
        provide: _app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService,
        deps: []
      }]);

      var inject = injector.get(_app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService);
      var lang = inject.language;
      var _environment = {
        production: true,
        firebase: {
          apiKey: "Your Api Key",
          authDomain: "Your Auth Domain",
          databaseURL: "Your Database Url",
          projectId: "Your Project Id",
          storageBucket: "Your StorageBucket url",
          messagingSenderId: "Your Sender Id"
        },
        // Server_URL:'https://localhost:7296/api'
        Server_URL: 'https://mainwebsitecompany.softwaresbuilders.com/public/api'
      };
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment2
          );
        },

        /* harmony export */
        "Server_URL": function Server_URL() {
          return (
            /* binding */
            _Server_URL
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment2 = {
        production: false // Server_URL:'https://localhost:7296/api',

      };
      var _Server_URL = 'https://mainwebsitecompany.softwaresbuilders.com/public/api';
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    96381:
    /*!******************************!*\
      !*** ./src/images/images.ts ***!
      \******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "img": function img() {
          return (
            /* binding */
            _img
          );
        },

        /* harmony export */
        "Image": function Image() {
          return (
            /* binding */
            _Image
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _img = {
        production: false // Server_URL:'https://localhost:7296/api',

      };
      var _Image = "https://mainwebsitecompany.softwaresbuilders.com/public/";
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map