(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_BrandsSection_tsx_a4ac41._.js", {

"[project]/src/app/components/BrandsSection.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * @file BrandsSection.tsx
 * @description Brand Section component, this contains all brands the company has worked with
 * @version 1.0.0
 * @todo Style the section
 */ __turbopack_esm__({
    "default": ()=>BrandsSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
function BrandsLogoCard({ brand }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            opacity: 1,
            scale: 1
        },
        initial: {
            opacity: 0,
            scale: 0.8
        },
        transition: {
            duration: 0.5
        },
        whileHover: {
            scale: 1.1
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex flex-col items-center justify-center gap-2", "aspect-[2/1] w-32 rounded-2xl p-4"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: brand.name,
            className: "object-cover",
            src: brand.logo || ''
        }, void 0, false, {
            fileName: "[project]/src/app/components/BrandsSection.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, brand.name, false, {
        fileName: "[project]/src/app/components/BrandsSection.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = BrandsLogoCard;
function BrandsSection({ data }) {
    const brands = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        animate: {
            opacity: 1
        },
        "aria-label": "Brands section",
        className: "flex flex-col items-center justify-center gap-8 py-8 md:pb-10 w-full md:mb-32 mb-24 bg-primary-50 rounded-[32px]",
        id: "brands",
        initial: {
            opacity: 0
        },
        role: "region",
        transition: {
            duration: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "text-3xl font-bold text-center",
                initial: {
                    opacity: 0,
                    y: -20
                },
                transition: {
                    duration: 0.5
                },
                whileInView: {
                    scale: 1.1
                },
                children: "Đối tác"
            }, void 0, false, {
                fileName: "[project]/src/app/components/BrandsSection.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                autoFill: true,
                speed: 25,
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row gap-4 px-4",
                    children: brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandsLogoCard, {
                            brand: brand
                        }, brand.name, false, {
                            fileName: "[project]/src/app/components/BrandsSection.tsx",
                            lineNumber: 67,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/BrandsSection.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/BrandsSection.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/BrandsSection.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_c1 = BrandsSection;
var _c, _c1;
__turbopack_refresh__.register(_c, "BrandsLogoCard");
__turbopack_refresh__.register(_c1, "BrandsSection");

})()),
}]);

//# sourceMappingURL=src_app_components_BrandsSection_tsx_a4ac41._.js.map