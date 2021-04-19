module.exports = {
    'extends' : [
        'plugin:vue/essential'
    ],
    rules : {
        'comma-dangle' : "off",
        'indent'       : ["error", 4, {
            ignoreComments : true,
            SwitchCase     : 1,
            ignoredNodes   : ["ConditionalExpression"]
        }],
        'wrap-iife'   : "off",
        'key-spacing' : ["error", {
            singleLine : {
                beforeColon : true,
                afterColon  : true,
                mode        : "strict"
            },
            multiLine : {
                beforeColon : true,
                afterColon  : true,
                mode        : "minimum",
                align       : "colon"
            }
        }],
        'keyword-spacing' : ["error", {
            overrides : {
                "catch" : { after : false }
            }
        }],
        'array-bracket-spacing'   : 'off',
        'no-console'              : ['error', { allow : ["error", "warn"] }],
        'no-debugger'             : 'error',
        'no-multi-spaces'         : "off",
        'no-multiple-empty-lines' : ["error", {
            max    : 3,
            maxEOF : 1,
            maxBOF : 0
        }],
        'no-unneeded-ternary'         : 'off',
        'no-unreachable'              : 'off',
        'operator-linebreak'          : "off",
        'quotes'                      : "off",
        'semi'                        : ["error", "always"],
        'space-before-function-paren' : ["error", "never"],
        'space-unary-ops'             : "off",
        'spaced-comment'              : 'off',
        'yoda'                        : 'off'
    },
    overrides : [
        {
            files : [
                '**/*.js'
            ],
            env : {
                mocha : true
            },
            rules : {
                'no-console'            : 'off',
                'no-debugger'           : 'off',
                'no-unused-expressions' : 'off'
            }
        }
    ]
};
