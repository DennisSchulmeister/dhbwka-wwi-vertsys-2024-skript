export default {
    sourceFileName: "NIBBLES.BAS",
    localSymbols: [{"name":"NumPlayers","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"speed","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"diff$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"monitor$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"KeyFlags","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"a","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"}],
    globalSymbols: [{"name":"TRUE","varType":"const","typeSpec":{"type":"single"},"varScope":"global"},{"name":"FALSE","varType":"const","typeSpec":{"type":"integer"},"varScope":"global"},{"name":"MAXSNAKELENGTH","varType":"const","typeSpec":{"type":"single"},"varScope":"global"},{"name":"STARTOVER","varType":"const","typeSpec":{"type":"single"},"varScope":"global"},{"name":"SAMELEVEL","varType":"const","typeSpec":{"type":"single"},"varScope":"global"},{"name":"NEXTLEVEL","varType":"const","typeSpec":{"type":"single"},"varScope":"global"},{"name":"arena","varType":"var","typeSpec":{"type":"array","elementTypeSpec":{"type":"udt","name":"arenaType","fieldSpecs":[{"name":"realRow","typeSpec":{"type":"integer"}},{"name":"acolor","typeSpec":{"type":"integer"}},{"name":"sister","typeSpec":{"type":"integer"}}]},"dimensionSpecs":[[0,0],[0,0]]},"varScope":"global"},{"name":"curLevel","varType":"var","typeSpec":{"type":"integer"},"varScope":"global"},{"name":"colorTable","varType":"var","typeSpec":{"type":"array","elementTypeSpec":{"type":"integer"},"dimensionSpecs":[[0,0]]},"varScope":"global"}],
    stmts: [
        {
            loc: [79, 1],
            async run(ctx) { ctx.globalVars['TRUE'] = (-1);  },
        },
        {
            loc: [80, 1],
            async run(ctx) { ctx.globalVars['FALSE'] = (!ctx.globalVars['TRUE']);  },
        },
        {
            loc: [81, 1],
            async run(ctx) { ctx.globalVars['MAXSNAKELENGTH'] = 1000;  },
        },
        {
            loc: [82, 1],
            async run(ctx) { ctx.globalVars['STARTOVER'] = 1;  },
        },
        {
            loc: [83, 1],
            async run(ctx) { ctx.globalVars['SAMELEVEL'] = 2;  },
        },
        {
            loc: [84, 1],
            async run(ctx) { ctx.globalVars['NEXTLEVEL'] = 3;  },
        },
        {
            loc: [87, 1],
            async run(ctx) { ctx.globalVars['arena'].init({"type":"udt","name":"arenaType","fieldSpecs":[{"name":"realRow","typeSpec":{"type":"integer"}},{"name":"acolor","typeSpec":{"type":"integer"}},{"name":"sister","typeSpec":{"type":"integer"}}]}, [[1, 50],[1, 80],]);  },
        },
        {
            loc: [88, 1],
            async run(ctx) { ctx.globalVars['colorTable'].init({"type":"integer"}, [[0, 10],]);  },
        },
        {
            loc: [90, 5],
            async run(ctx) { (await (async () => {
                ctx.tempVars['$1_0'] = (await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('TIMER', [], );
                    return result;
                })());
                const result = await ctx.runtime.executeBuiltinProc('RANDOMIZE', [{"type":"long"}], [ctx.tempVars, '$1_0']);
                delete ctx.tempVars['$1_0'];
                return result;
            })()); },
        },
        {
            loc: [91, 5],
            async run(ctx) { return { type: 'gosub', destLabel: 'ClearKeyLocks' }; },
        },
        {
            loc: [92, 5],
            async run(ctx) { (await (async () => {
                const result = await ctx.executeProc(ctx, 'Intro', );
                return result;
            })()); },
        },
        {
            loc: [93, 5],
            async run(ctx) { (await (async () => {
                const result = await ctx.executeProc(ctx, 'GetInputs', [ctx.localVars, 'NumPlayers'], [ctx.localVars, 'speed'], [ctx.localVars, 'diff$'], [ctx.localVars, 'monitor$']);
                return result;
            })()); },
        },
        {
            loc: [94, 5],
            async run(ctx) { return { type: 'gosub', destLabel: 'SetColors' }; },
        },
        {
            loc: [95, 5],
            async run(ctx) { (await (async () => {
                const result = await ctx.executeProc(ctx, 'DrawScreen', );
                return result;
            })()); },
        },
        {
            loc: [97, 5],
            label: '$2_loopStart',
        },
            {
                loc: [98, 7],
                async run(ctx) { (await (async () => {
                    const result = await ctx.executeProc(ctx, 'PlayNibbles', [ctx.localVars, 'NumPlayers'], [ctx.localVars, 'speed'], [ctx.localVars, 'diff$']);
                    return result;
                })()); },
            },
        {
            loc: [97, 5],
            async run(ctx) { if (!((await (async () => {
            const result = await ctx.executeProc(ctx, 'StillWantsToPlay', );
            return result;
        })()))) { return { type: 'goto', destLabel: '$2_loopEnd' }; } },
        },
        {
            loc: [97, 5],
            async run(ctx) { return { type: 'goto', destLabel: '$2_loopStart' }; },
        },
        {
            loc: [97, 5],
            label: '$2_loopEnd',
        },
        {
            loc: [101, 5],
            async run(ctx) { return { type: 'gosub', destLabel: 'RestoreKeyLocks' }; },
        },
        {
            loc: [102, 5],
            async run(ctx) { (await (async () => {
                ctx.tempVars['$3_0'] = ctx.runtime.roundHalfToEven(15);
                ctx.tempVars['$3_1'] = ctx.runtime.roundHalfToEven(0);
                const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$3_0'], [ctx.tempVars, '$3_1']);
                delete ctx.tempVars['$3_0'];
                delete ctx.tempVars['$3_1'];
                return result;
            })()); },
        },
        {
            loc: [103, 5],
            async run(ctx) { (await (async () => {
                const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                return result;
            })()); },
        },
        {
            loc: [104, 1],
            async run(ctx) { return { type: 'end' }; },
        },
        {
            loc: [106, 1],
            label: 'ClearKeyLocks',
        },
        {
            loc: [107, 5],
            async run(ctx) { (await (async () => {
                ctx.tempVars['$4_0'] = ctx.runtime.roundHalfToEven(0);
                const result = await ctx.runtime.executeBuiltinProc('__def_seg', [{"type":"single"}], [ctx.tempVars, '$4_0']);
                delete ctx.tempVars['$4_0'];
                return result;
            })()); },
        },
        {
            loc: [108, 5],
            async run(ctx) { ctx.localVars['KeyFlags'] = (await (async () => {
                ctx.tempVars['$5_0'] = ctx.runtime.roundHalfToEven(1047);
                const result = await ctx.runtime.executeBuiltinProc('PEEK', [{"type":"single"}], [ctx.tempVars, '$5_0']);
                delete ctx.tempVars['$5_0'];
                return result;
            })()); },
        },
        {
            loc: [109, 5],
            async run(ctx) { (await (async () => {
                ctx.tempVars['$6_0'] = ctx.runtime.roundHalfToEven(1047);
                ctx.tempVars['$6_1'] = ctx.runtime.roundHalfToEven(0);
                const result = await ctx.runtime.executeBuiltinProc('POKE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$6_0'], [ctx.tempVars, '$6_1']);
                delete ctx.tempVars['$6_0'];
                delete ctx.tempVars['$6_1'];
                return result;
            })()); },
        },
        {
            loc: [110, 5],
            async run(ctx) { (await (async () => {
                const result = await ctx.runtime.executeBuiltinProc('__def_seg', [], );
                return result;
            })()); },
        },
        {
            loc: [111, 5],
            async run(ctx) { return { type: 'return' }; },
        },
        {
            loc: [113, 1],
            label: 'RestoreKeyLocks',
        },
        {
            loc: [114, 5],
            async run(ctx) { (await (async () => {
                ctx.tempVars['$7_0'] = ctx.runtime.roundHalfToEven(0);
                const result = await ctx.runtime.executeBuiltinProc('__def_seg', [{"type":"single"}], [ctx.tempVars, '$7_0']);
                delete ctx.tempVars['$7_0'];
                return result;
            })()); },
        },
        {
            loc: [115, 5],
            async run(ctx) { (await (async () => {
                ctx.tempVars['$8_0'] = ctx.runtime.roundHalfToEven(1047);
                ctx.tempVars['$8_1'] = ctx.localVars['KeyFlags'];
                const result = await ctx.runtime.executeBuiltinProc('POKE', [{"type":"single"},{"type":"integer"}], [ctx.tempVars, '$8_0'], [ctx.tempVars, '$8_1']);
                delete ctx.tempVars['$8_0'];
                delete ctx.tempVars['$8_1'];
                return result;
            })()); },
        },
        {
            loc: [116, 5],
            async run(ctx) { (await (async () => {
                const result = await ctx.runtime.executeBuiltinProc('__def_seg', [], );
                return result;
            })()); },
        },
        {
            loc: [117, 5],
            async run(ctx) { return { type: 'return' }; },
        },
        {
            loc: [119, 1],
            label: 'SetColors',
        },
        {
            loc: [120, 5],
            async run(ctx) { if (!((ctx.localVars['monitor$'] === "M"))) { return { type: 'goto', destLabel: '$9_else' }; } },
        },
            {
                loc: [121, 9],
                async run(ctx) { ctx.restore('mono'); },
            },
            {
                loc: [120, 5],
                async run(ctx) { return { type: 'goto', destLabel: '$9_endif' }; },
            },
        {
            loc: [122, 5],
            label: '$9_else',
        },
            {
                loc: [123, 9],
                async run(ctx) { ctx.restore('normal'); },
            },
        {
            label: '$9_endif',
        },
        {
            loc: [126, 5],
            async run(ctx) { ctx.localVars['a'] = 1; ctx.tempVars['$10_step'] = 1; ctx.tempVars['$10_end'] = 6; },
        },
        {
            loc: [126, 5],
            label: '$10_loopStart',
        },
            {
                loc: [126, 5],
                async run(ctx) { const counterValue = ctx.localVars['a']; if ((ctx.tempVars['$10_step'] >= 0 && counterValue > ctx.tempVars['$10_end']) || (ctx.tempVars['$10_step'] < 0 && counterValue < ctx.tempVars['$10_end'])) { return { type: 'goto', destLabel: '$10_loopEnd' }; } },
            },
            {
                loc: [127, 9],
                async run(ctx) { const results = await ctx.read({"type":"integer"}); ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, ctx.localVars['a'])] = results[0];  },
            },
            {
                loc: [128, 5],
                async run(ctx) { ctx.localVars['a'] += ctx.tempVars['$10_step']; return { type: 'goto', destLabel: '$10_loopStart' }; },
            },
        {
            loc: [126, 5],
            label: '$10_loopEnd',
        },
        {
            loc: [126, 5],
            async run(ctx) { delete ctx.tempVars['$10_step']; delete ctx.tempVars['$10_end']; },
        },
        {
            loc: [129, 5],
            async run(ctx) { return { type: 'return' }; },
        },
        {
            loc: [132, 1],
            label: 'mono',
        },
        {
            loc: [132, 9],
            data: [[[132,14],15],[[132,26],7],[[132,35],7],[[132,42],0],[[132,54],15],[[132,69],0]],
        },
        {
            loc: [133, 1],
            label: 'normal',
        },
        {
            loc: [133, 9],
            data: [[[133,14],14],[[133,26],13],[[133,35],12],[[133,42],1],[[133,54],15],[[133,69],4]],
        },
        {
            loc: [134, 1],
            async run(ctx) { return { type: 'end' }; },
        },
    ],
    procs: [
        {
            loc: [138, 1],
            type: 'sub',
            name: 'Center',
            localSymbols: [],
            paramSymbols: [{"name":"row","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"text$","varType":"arg","typeSpec":{"type":"string"},"varScope":"local"}],
            stmts: [
                {
                    loc: [139, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$11_0'] = ctx.args['row'][0][ctx.args['row'][1]];
                        ctx.tempVars['$11_1'] = ctx.runtime.roundHalfToEven((41 - ((await (async () => {
                            ctx.tempVars['$12_0'] = ctx.args['text$'][0][ctx.args['text$'][1]];
                            const result = await ctx.runtime.executeBuiltinProc('LEN', [{"type":"string"}], [ctx.tempVars, '$12_0']);
                            delete ctx.tempVars['$12_0'];
                            return result;
                        })()) / 2)));
                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"integer"},{"type":"single"}], [ctx.tempVars, '$11_0'], [ctx.tempVars, '$11_1']);
                        delete ctx.tempVars['$11_0'];
                        delete ctx.tempVars['$11_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [140, 5],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: ctx.args['text$'][0][ctx.args['text$'][1]] }, { type: 'semicolon' }, ); },
                },
            ],
        },
        {
            loc: [145, 1],
            type: 'sub',
            name: 'DrawScreen',
            localSymbols: [{"name":"row","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"col","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"}],
            paramSymbols: [],
            stmts: [
                {
                    loc: [148, 5],
                    async run(ctx) { (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('__view_print', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [149, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$13_0'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 1)];
                        ctx.tempVars['$13_1'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 4)];
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$13_0'], [ctx.tempVars, '$13_1']);
                        delete ctx.tempVars['$13_0'];
                        delete ctx.tempVars['$13_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [150, 5],
                    async run(ctx) { (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [153, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$14_0'] = ctx.runtime.roundHalfToEven(1);
                        ctx.tempVars['$14_1'] = "Nibbles!";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$14_0'], [ctx.tempVars, '$14_1']);
                        delete ctx.tempVars['$14_0'];
                        delete ctx.tempVars['$14_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [154, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$15_0'] = ctx.runtime.roundHalfToEven(11);
                        ctx.tempVars['$15_1'] = "Initializing Playing Field...";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$15_0'], [ctx.tempVars, '$15_1']);
                        delete ctx.tempVars['$15_0'];
                        delete ctx.tempVars['$15_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [157, 5],
                    async run(ctx) { ctx.localVars['row'] = 1; ctx.tempVars['$16_step'] = 1; ctx.tempVars['$16_end'] = 50; },
                },
                {
                    loc: [157, 5],
                    label: '$16_loopStart',
                },
                    {
                        loc: [157, 5],
                        async run(ctx) { const counterValue = ctx.localVars['row']; if ((ctx.tempVars['$16_step'] >= 0 && counterValue > ctx.tempVars['$16_end']) || (ctx.tempVars['$16_step'] < 0 && counterValue < ctx.tempVars['$16_end'])) { return { type: 'goto', destLabel: '$16_loopEnd' }; } },
                    },
                    {
                        loc: [158, 9],
                        async run(ctx) { ctx.localVars['col'] = 1; ctx.tempVars['$17_step'] = 1; ctx.tempVars['$17_end'] = 80; },
                    },
                    {
                        loc: [158, 9],
                        label: '$17_loopStart',
                    },
                        {
                            loc: [158, 9],
                            async run(ctx) { const counterValue = ctx.localVars['col']; if ((ctx.tempVars['$17_step'] >= 0 && counterValue > ctx.tempVars['$17_end']) || (ctx.tempVars['$17_step'] < 0 && counterValue < ctx.tempVars['$17_end'])) { return { type: 'goto', destLabel: '$17_loopEnd' }; } },
                        },
                        {
                            loc: [159, 13],
                            async run(ctx) { ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.localVars['row'])][ctx.globalVars['arena'].getIdx(1, ctx.localVars['col'])].values['realRow'] = (await (async () => {
                                ctx.tempVars['$18_0'] = (((ctx.localVars['row'] + 1)) / 2);
                                const result = await ctx.runtime.executeBuiltinProc('INT', [{"type":"single"}], [ctx.tempVars, '$18_0']);
                                delete ctx.tempVars['$18_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [160, 13],
                            async run(ctx) { ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.localVars['row'])][ctx.globalVars['arena'].getIdx(1, ctx.localVars['col'])].values['sister'] = ctx.runtime.roundHalfToEven(((((ctx.localVars['row'] % 2)) * 2) - 1)); },
                        },
                        {
                            loc: [161, 9],
                            async run(ctx) { ctx.localVars['col'] += ctx.tempVars['$17_step']; return { type: 'goto', destLabel: '$17_loopStart' }; },
                        },
                    {
                        loc: [158, 9],
                        label: '$17_loopEnd',
                    },
                    {
                        loc: [158, 9],
                        async run(ctx) { delete ctx.tempVars['$17_step']; delete ctx.tempVars['$17_end']; },
                    },
                    {
                        loc: [162, 5],
                        async run(ctx) { ctx.localVars['row'] += ctx.tempVars['$16_step']; return { type: 'goto', destLabel: '$16_loopStart' }; },
                    },
                {
                    loc: [157, 5],
                    label: '$16_loopEnd',
                },
                {
                    loc: [157, 5],
                    async run(ctx) { delete ctx.tempVars['$16_step']; delete ctx.tempVars['$16_end']; },
                },
            ],
        },
        {
            loc: [167, 1],
            type: 'sub',
            name: 'EraseSnake',
            localSymbols: [{"name":"c","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"b","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"tail","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"}],
            paramSymbols: [{"name":"snake","varType":"arg","typeSpec":{"type":"array","elementTypeSpec":{"type":"udt","name":"snaketype","fieldSpecs":[{"name":"head","typeSpec":{"type":"integer"}},{"name":"length","typeSpec":{"type":"integer"}},{"name":"row","typeSpec":{"type":"integer"}},{"name":"col","typeSpec":{"type":"integer"}},{"name":"direction","typeSpec":{"type":"integer"}},{"name":"lives","typeSpec":{"type":"integer"}},{"name":"score","typeSpec":{"type":"integer"}},{"name":"scolor","typeSpec":{"type":"integer"}},{"name":"alive","typeSpec":{"type":"integer"}}]},"dimensionSpecs":[]},"varScope":"local"},{"name":"snakeBod","varType":"arg","typeSpec":{"type":"array","elementTypeSpec":{"type":"udt","name":"snakeBody","fieldSpecs":[{"name":"row","typeSpec":{"type":"integer"}},{"name":"col","typeSpec":{"type":"integer"}}]},"dimensionSpecs":[]},"varScope":"local"},{"name":"snakeNum","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"}],
            stmts: [
                {
                    loc: [169, 5],
                    async run(ctx) { ctx.localVars['c'] = 0; ctx.tempVars['$19_step'] = 1; ctx.tempVars['$19_end'] = 9; },
                },
                {
                    loc: [169, 5],
                    label: '$19_loopStart',
                },
                    {
                        loc: [169, 5],
                        async run(ctx) { const counterValue = ctx.localVars['c']; if ((ctx.tempVars['$19_step'] >= 0 && counterValue > ctx.tempVars['$19_end']) || (ctx.tempVars['$19_step'] < 0 && counterValue < ctx.tempVars['$19_end'])) { return { type: 'goto', destLabel: '$19_loopEnd' }; } },
                    },
                    {
                        loc: [170, 9],
                        async run(ctx) { ctx.localVars['b'] = (ctx.args['snake'][0][ctx.args['snake'][1]].values[ctx.args['snake'][0][ctx.args['snake'][1]].getIdx(0, ctx.args['snakeNum'][0][ctx.args['snakeNum'][1]])].values['length'] - ctx.localVars['c']); ctx.tempVars['$20_step'] = (-10); ctx.tempVars['$20_end'] = 0; },
                    },
                    {
                        loc: [170, 9],
                        label: '$20_loopStart',
                    },
                        {
                            loc: [170, 9],
                            async run(ctx) { const counterValue = ctx.localVars['b']; if ((ctx.tempVars['$20_step'] >= 0 && counterValue > ctx.tempVars['$20_end']) || (ctx.tempVars['$20_step'] < 0 && counterValue < ctx.tempVars['$20_end'])) { return { type: 'goto', destLabel: '$20_loopEnd' }; } },
                        },
                        {
                            loc: [171, 13],
                            async run(ctx) { ctx.localVars['tail'] = ctx.runtime.roundHalfToEven(((((ctx.args['snake'][0][ctx.args['snake'][1]].values[ctx.args['snake'][0][ctx.args['snake'][1]].getIdx(0, ctx.args['snakeNum'][0][ctx.args['snakeNum'][1]])].values['head'] + ctx.globalVars['MAXSNAKELENGTH']) - ctx.localVars['b'])) % ctx.globalVars['MAXSNAKELENGTH'])); },
                        },
                        {
                            loc: [172, 13],
                            async run(ctx) { (await (async () => {
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.args['snakeBod'][0][ctx.args['snakeBod'][1]].values[ctx.args['snakeBod'][0][ctx.args['snakeBod'][1]].getIdx(0, ctx.localVars['tail'])][ctx.args['snakeBod'][0][ctx.args['snakeBod'][1]].getIdx(1, ctx.args['snakeNum'][0][ctx.args['snakeNum'][1]])].values, 'row'], [ctx.args['snakeBod'][0][ctx.args['snakeBod'][1]].values[ctx.args['snakeBod'][0][ctx.args['snakeBod'][1]].getIdx(0, ctx.localVars['tail'])][ctx.args['snakeBod'][0][ctx.args['snakeBod'][1]].getIdx(1, ctx.args['snakeNum'][0][ctx.args['snakeNum'][1]])].values, 'col'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 4)]);
                                return result;
                            })()); },
                        },
                        {
                            loc: [173, 9],
                            async run(ctx) { ctx.localVars['b'] += ctx.tempVars['$20_step']; return { type: 'goto', destLabel: '$20_loopStart' }; },
                        },
                    {
                        loc: [170, 9],
                        label: '$20_loopEnd',
                    },
                    {
                        loc: [170, 9],
                        async run(ctx) { delete ctx.tempVars['$20_step']; delete ctx.tempVars['$20_end']; },
                    },
                    {
                        loc: [174, 5],
                        async run(ctx) { ctx.localVars['c'] += ctx.tempVars['$19_step']; return { type: 'goto', destLabel: '$19_loopStart' }; },
                    },
                {
                    loc: [169, 5],
                    label: '$19_loopEnd',
                },
                {
                    loc: [169, 5],
                    async run(ctx) { delete ctx.tempVars['$19_step']; delete ctx.tempVars['$19_end']; },
                },
            ],
        },
        {
            loc: [180, 1],
            type: 'sub',
            name: 'GetInputs',
            localSymbols: [{"name":"num$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"gamespeed$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"startTime#","typeSpec":{"type":"double"},"varType":"var","varScope":"local"},{"name":"i#","typeSpec":{"type":"double"},"varType":"var","varScope":"local"},{"name":"stopTime#","typeSpec":{"type":"double"},"varType":"var","varScope":"local"}],
            paramSymbols: [{"name":"NumPlayers","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"speed","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"diff$","varType":"arg","typeSpec":{"type":"string"},"varScope":"local"},{"name":"monitor$","varType":"arg","typeSpec":{"type":"string"},"varScope":"local"}],
            stmts: [
                {
                    loc: [182, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$21_0'] = ctx.runtime.roundHalfToEven(7);
                        ctx.tempVars['$21_1'] = ctx.runtime.roundHalfToEven(0);
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$21_0'], [ctx.tempVars, '$21_1']);
                        delete ctx.tempVars['$21_0'];
                        delete ctx.tempVars['$21_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [183, 5],
                    async run(ctx) { (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [185, 5],
                    label: '$22_loopStart',
                },
                    {
                        loc: [186, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$25_0'] = ctx.runtime.roundHalfToEven(5);
                            ctx.tempVars['$25_1'] = ctx.runtime.roundHalfToEven(47);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$25_0'], [ctx.tempVars, '$25_1']);
                            delete ctx.tempVars['$25_0'];
                            delete ctx.tempVars['$25_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [186, 23],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                            ctx.tempVars['$26_0'] = ctx.runtime.roundHalfToEven(34);
                            const result = await ctx.runtime.executeBuiltinProc('SPACE$', [{"type":"single"}], [ctx.tempVars, '$26_0']);
                            delete ctx.tempVars['$26_0'];
                            return result;
                        })()) }, { type: 'semicolon' }, ); },
                    },
                    {
                        loc: [187, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$27_0'] = ctx.runtime.roundHalfToEven(5);
                            ctx.tempVars['$27_1'] = ctx.runtime.roundHalfToEven(20);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$27_0'], [ctx.tempVars, '$27_1']);
                            delete ctx.tempVars['$27_0'];
                            delete ctx.tempVars['$27_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [188, 9],
                        async run(ctx) { const results = await ctx.runtime.input("How many players (1 or 2)? ", {"type":"string"}); ctx.localVars['num$'] = results[0];  },
                    },
                {
                    loc: [185, 5],
                    async run(ctx) { if ((((await (async () => {
                    ctx.tempVars['$23_0'] = ctx.localVars['num$'];
                    const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$23_0']);
                    delete ctx.tempVars['$23_0'];
                    return result;
                })()) === 1) || ((await (async () => {
                    ctx.tempVars['$24_0'] = ctx.localVars['num$'];
                    const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$24_0']);
                    delete ctx.tempVars['$24_0'];
                    return result;
                })()) === 2))) { return { type: 'goto', destLabel: '$22_loopEnd' }; } },
                },
                {
                    loc: [185, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$22_loopStart' }; },
                },
                {
                    loc: [185, 5],
                    label: '$22_loopEnd',
                },
                {
                    loc: [190, 5],
                    async run(ctx) { ctx.args['NumPlayers'][0][ctx.args['NumPlayers'][1]] = ctx.runtime.roundHalfToEven((await (async () => {
                        ctx.tempVars['$28_0'] = ctx.localVars['num$'];
                        const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$28_0']);
                        delete ctx.tempVars['$28_0'];
                        return result;
                    })())); },
                },
                {
                    loc: [192, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$29_0'] = ctx.runtime.roundHalfToEven(8);
                        ctx.tempVars['$29_1'] = ctx.runtime.roundHalfToEven(21);
                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$29_0'], [ctx.tempVars, '$29_1']);
                        delete ctx.tempVars['$29_0'];
                        delete ctx.tempVars['$29_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [192, 19],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Skill level (1 to 100)" }, ); },
                },
                {
                    loc: [193, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$30_0'] = ctx.runtime.roundHalfToEven(9);
                        ctx.tempVars['$30_1'] = ctx.runtime.roundHalfToEven(22);
                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$30_0'], [ctx.tempVars, '$30_1']);
                        delete ctx.tempVars['$30_0'];
                        delete ctx.tempVars['$30_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [193, 19],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "1   = Novice" }, ); },
                },
                {
                    loc: [194, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$31_0'] = ctx.runtime.roundHalfToEven(10);
                        ctx.tempVars['$31_1'] = ctx.runtime.roundHalfToEven(22);
                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$31_0'], [ctx.tempVars, '$31_1']);
                        delete ctx.tempVars['$31_0'];
                        delete ctx.tempVars['$31_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [194, 20],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "90  = Expert" }, ); },
                },
                {
                    loc: [195, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$32_0'] = ctx.runtime.roundHalfToEven(11);
                        ctx.tempVars['$32_1'] = ctx.runtime.roundHalfToEven(22);
                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$32_0'], [ctx.tempVars, '$32_1']);
                        delete ctx.tempVars['$32_0'];
                        delete ctx.tempVars['$32_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [195, 20],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "100 = Twiddle Fingers" }, ); },
                },
                {
                    loc: [196, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$33_0'] = ctx.runtime.roundHalfToEven(12);
                        ctx.tempVars['$33_1'] = ctx.runtime.roundHalfToEven(15);
                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$33_0'], [ctx.tempVars, '$33_1']);
                        delete ctx.tempVars['$33_0'];
                        delete ctx.tempVars['$33_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [196, 20],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "(Computer speed may affect your skill level)" }, ); },
                },
                {
                    loc: [197, 5],
                    label: '$34_loopStart',
                },
                    {
                        loc: [198, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$37_0'] = ctx.runtime.roundHalfToEven(8);
                            ctx.tempVars['$37_1'] = ctx.runtime.roundHalfToEven(44);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$37_0'], [ctx.tempVars, '$37_1']);
                            delete ctx.tempVars['$37_0'];
                            delete ctx.tempVars['$37_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [198, 23],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                            ctx.tempVars['$38_0'] = ctx.runtime.roundHalfToEven(35);
                            const result = await ctx.runtime.executeBuiltinProc('SPACE$', [{"type":"single"}], [ctx.tempVars, '$38_0']);
                            delete ctx.tempVars['$38_0'];
                            return result;
                        })()) }, { type: 'semicolon' }, ); },
                    },
                    {
                        loc: [199, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$39_0'] = ctx.runtime.roundHalfToEven(8);
                            ctx.tempVars['$39_1'] = ctx.runtime.roundHalfToEven(43);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$39_0'], [ctx.tempVars, '$39_1']);
                            delete ctx.tempVars['$39_0'];
                            delete ctx.tempVars['$39_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [200, 9],
                        async run(ctx) { const results = await ctx.runtime.input("? ", {"type":"string"}); ctx.localVars['gamespeed$'] = results[0];  },
                    },
                {
                    loc: [197, 5],
                    async run(ctx) { if ((((await (async () => {
                    ctx.tempVars['$35_0'] = ctx.localVars['gamespeed$'];
                    const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$35_0']);
                    delete ctx.tempVars['$35_0'];
                    return result;
                })()) >= 1) && ((await (async () => {
                    ctx.tempVars['$36_0'] = ctx.localVars['gamespeed$'];
                    const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$36_0']);
                    delete ctx.tempVars['$36_0'];
                    return result;
                })()) <= 100))) { return { type: 'goto', destLabel: '$34_loopEnd' }; } },
                },
                {
                    loc: [197, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$34_loopStart' }; },
                },
                {
                    loc: [197, 5],
                    label: '$34_loopEnd',
                },
                {
                    loc: [202, 5],
                    async run(ctx) { ctx.args['speed'][0][ctx.args['speed'][1]] = ctx.runtime.roundHalfToEven((await (async () => {
                        ctx.tempVars['$40_0'] = ctx.localVars['gamespeed$'];
                        const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$40_0']);
                        delete ctx.tempVars['$40_0'];
                        return result;
                    })())); },
                },
                {
                    loc: [204, 5],
                    async run(ctx) { ctx.args['speed'][0][ctx.args['speed'][1]] = ctx.runtime.roundHalfToEven(((((100 - ctx.args['speed'][0][ctx.args['speed'][1]])) * 2) + 1)); },
                },
                {
                    loc: [206, 5],
                    label: '$41_loopStart',
                },
                    {
                        loc: [207, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$42_0'] = ctx.runtime.roundHalfToEven(15);
                            ctx.tempVars['$42_1'] = ctx.runtime.roundHalfToEven(56);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$42_0'], [ctx.tempVars, '$42_1']);
                            delete ctx.tempVars['$42_0'];
                            delete ctx.tempVars['$42_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [207, 24],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                            ctx.tempVars['$43_0'] = ctx.runtime.roundHalfToEven(25);
                            const result = await ctx.runtime.executeBuiltinProc('SPACE$', [{"type":"single"}], [ctx.tempVars, '$43_0']);
                            delete ctx.tempVars['$43_0'];
                            return result;
                        })()) }, { type: 'semicolon' }, ); },
                    },
                    {
                        loc: [208, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$44_0'] = ctx.runtime.roundHalfToEven(15);
                            ctx.tempVars['$44_1'] = ctx.runtime.roundHalfToEven(15);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$44_0'], [ctx.tempVars, '$44_1']);
                            delete ctx.tempVars['$44_0'];
                            delete ctx.tempVars['$44_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [209, 9],
                        async run(ctx) { const results = await ctx.runtime.input("Increase game speed during play (Y or N)? ", {"type":"string"}); ctx.args['diff$'][0][ctx.args['diff$'][1]] = results[0];  },
                    },
                    {
                        loc: [210, 9],
                        async run(ctx) { ctx.args['diff$'][0][ctx.args['diff$'][1]] = (await (async () => {
                            ctx.tempVars['$45_0'] = ctx.args['diff$'][0][ctx.args['diff$'][1]];
                            const result = await ctx.runtime.executeBuiltinProc('UCASE$', [{"type":"string"}], [ctx.tempVars, '$45_0']);
                            delete ctx.tempVars['$45_0'];
                            return result;
                        })()); },
                    },
                {
                    loc: [206, 5],
                    async run(ctx) { if (((ctx.args['diff$'][0][ctx.args['diff$'][1]] === "Y") || (ctx.args['diff$'][0][ctx.args['diff$'][1]] === "N"))) { return { type: 'goto', destLabel: '$41_loopEnd' }; } },
                },
                {
                    loc: [206, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$41_loopStart' }; },
                },
                {
                    loc: [206, 5],
                    label: '$41_loopEnd',
                },
                {
                    loc: [213, 5],
                    label: '$46_loopStart',
                },
                    {
                        loc: [214, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$47_0'] = ctx.runtime.roundHalfToEven(17);
                            ctx.tempVars['$47_1'] = ctx.runtime.roundHalfToEven(46);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$47_0'], [ctx.tempVars, '$47_1']);
                            delete ctx.tempVars['$47_0'];
                            delete ctx.tempVars['$47_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [214, 24],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                            ctx.tempVars['$48_0'] = ctx.runtime.roundHalfToEven(34);
                            const result = await ctx.runtime.executeBuiltinProc('SPACE$', [{"type":"single"}], [ctx.tempVars, '$48_0']);
                            delete ctx.tempVars['$48_0'];
                            return result;
                        })()) }, { type: 'semicolon' }, ); },
                    },
                    {
                        loc: [215, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$49_0'] = ctx.runtime.roundHalfToEven(17);
                            ctx.tempVars['$49_1'] = ctx.runtime.roundHalfToEven(17);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$49_0'], [ctx.tempVars, '$49_1']);
                            delete ctx.tempVars['$49_0'];
                            delete ctx.tempVars['$49_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [216, 9],
                        async run(ctx) { const results = await ctx.runtime.input("Monochrome or color monitor (M or C)? ", {"type":"string"}); ctx.args['monitor$'][0][ctx.args['monitor$'][1]] = results[0];  },
                    },
                    {
                        loc: [217, 9],
                        async run(ctx) { ctx.args['monitor$'][0][ctx.args['monitor$'][1]] = (await (async () => {
                            ctx.tempVars['$50_0'] = ctx.args['monitor$'][0][ctx.args['monitor$'][1]];
                            const result = await ctx.runtime.executeBuiltinProc('UCASE$', [{"type":"string"}], [ctx.tempVars, '$50_0']);
                            delete ctx.tempVars['$50_0'];
                            return result;
                        })()); },
                    },
                {
                    loc: [213, 5],
                    async run(ctx) { if (((ctx.args['monitor$'][0][ctx.args['monitor$'][1]] === "M") || (ctx.args['monitor$'][0][ctx.args['monitor$'][1]] === "C"))) { return { type: 'goto', destLabel: '$46_loopEnd' }; } },
                },
                {
                    loc: [213, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$46_loopStart' }; },
                },
                {
                    loc: [213, 5],
                    label: '$46_loopEnd',
                },
                {
                    loc: [220, 5],
                    async run(ctx) { ctx.localVars['startTime#'] = (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('TIMER', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [221, 5],
                    async run(ctx) { ctx.localVars['i#'] = 1; ctx.tempVars['$51_step'] = 1; ctx.tempVars['$51_end'] = 1000; },
                },
                {
                    loc: [221, 5],
                    label: '$51_loopStart',
                },
                    {
                        loc: [221, 5],
                        async run(ctx) { const counterValue = ctx.localVars['i#']; if ((ctx.tempVars['$51_step'] >= 0 && counterValue > ctx.tempVars['$51_end']) || (ctx.tempVars['$51_step'] < 0 && counterValue < ctx.tempVars['$51_end'])) { return { type: 'goto', destLabel: '$51_loopEnd' }; } },
                    },
                    {
                        loc: [221, 25],
                        async run(ctx) { ctx.localVars['i#'] += ctx.tempVars['$51_step']; return { type: 'goto', destLabel: '$51_loopStart' }; },
                    },
                {
                    loc: [221, 5],
                    label: '$51_loopEnd',
                },
                {
                    loc: [221, 5],
                    async run(ctx) { delete ctx.tempVars['$51_step']; delete ctx.tempVars['$51_end']; },
                },
                {
                    loc: [222, 5],
                    async run(ctx) { ctx.localVars['stopTime#'] = (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('TIMER', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [223, 5],
                    async run(ctx) { ctx.args['speed'][0][ctx.args['speed'][1]] = ctx.runtime.roundHalfToEven(((ctx.args['speed'][0][ctx.args['speed'][1]] * 0.5) / ((ctx.localVars['stopTime#'] - ctx.localVars['startTime#'])))); },
                },
            ],
        },
        {
            loc: [229, 1],
            type: 'sub',
            name: 'InitColors',
            localSymbols: [{"name":"row","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"col","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"}],
            paramSymbols: [],
            stmts: [
                {
                    loc: [231, 5],
                    async run(ctx) { ctx.localVars['row'] = 1; ctx.tempVars['$52_step'] = 1; ctx.tempVars['$52_end'] = 50; },
                },
                {
                    loc: [231, 5],
                    label: '$52_loopStart',
                },
                    {
                        loc: [231, 5],
                        async run(ctx) { const counterValue = ctx.localVars['row']; if ((ctx.tempVars['$52_step'] >= 0 && counterValue > ctx.tempVars['$52_end']) || (ctx.tempVars['$52_step'] < 0 && counterValue < ctx.tempVars['$52_end'])) { return { type: 'goto', destLabel: '$52_loopEnd' }; } },
                    },
                    {
                        loc: [232, 9],
                        async run(ctx) { ctx.localVars['col'] = 1; ctx.tempVars['$53_step'] = 1; ctx.tempVars['$53_end'] = 80; },
                    },
                    {
                        loc: [232, 9],
                        label: '$53_loopStart',
                    },
                        {
                            loc: [232, 9],
                            async run(ctx) { const counterValue = ctx.localVars['col']; if ((ctx.tempVars['$53_step'] >= 0 && counterValue > ctx.tempVars['$53_end']) || (ctx.tempVars['$53_step'] < 0 && counterValue < ctx.tempVars['$53_end'])) { return { type: 'goto', destLabel: '$53_loopEnd' }; } },
                        },
                        {
                            loc: [233, 13],
                            async run(ctx) { ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.localVars['row'])][ctx.globalVars['arena'].getIdx(1, ctx.localVars['col'])].values['acolor'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 4)]; },
                        },
                        {
                            loc: [234, 9],
                            async run(ctx) { ctx.localVars['col'] += ctx.tempVars['$53_step']; return { type: 'goto', destLabel: '$53_loopStart' }; },
                        },
                    {
                        loc: [232, 9],
                        label: '$53_loopEnd',
                    },
                    {
                        loc: [232, 9],
                        async run(ctx) { delete ctx.tempVars['$53_step']; delete ctx.tempVars['$53_end']; },
                    },
                    {
                        loc: [235, 5],
                        async run(ctx) { ctx.localVars['row'] += ctx.tempVars['$52_step']; return { type: 'goto', destLabel: '$52_loopStart' }; },
                    },
                {
                    loc: [231, 5],
                    label: '$52_loopEnd',
                },
                {
                    loc: [231, 5],
                    async run(ctx) { delete ctx.tempVars['$52_step']; delete ctx.tempVars['$52_end']; },
                },
                {
                    loc: [237, 5],
                    async run(ctx) { (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [240, 5],
                    async run(ctx) { ctx.localVars['col'] = 1; ctx.tempVars['$54_step'] = 1; ctx.tempVars['$54_end'] = 80; },
                },
                {
                    loc: [240, 5],
                    label: '$54_loopStart',
                },
                    {
                        loc: [240, 5],
                        async run(ctx) { const counterValue = ctx.localVars['col']; if ((ctx.tempVars['$54_step'] >= 0 && counterValue > ctx.tempVars['$54_end']) || (ctx.tempVars['$54_step'] < 0 && counterValue < ctx.tempVars['$54_end'])) { return { type: 'goto', destLabel: '$54_loopEnd' }; } },
                    },
                    {
                        loc: [241, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$55_0'] = ctx.runtime.roundHalfToEven(3);
                            const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$55_0'], [ctx.localVars, 'col'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                            delete ctx.tempVars['$55_0'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [242, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$56_0'] = ctx.runtime.roundHalfToEven(50);
                            const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$56_0'], [ctx.localVars, 'col'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                            delete ctx.tempVars['$56_0'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [243, 5],
                        async run(ctx) { ctx.localVars['col'] += ctx.tempVars['$54_step']; return { type: 'goto', destLabel: '$54_loopStart' }; },
                    },
                {
                    loc: [240, 5],
                    label: '$54_loopEnd',
                },
                {
                    loc: [240, 5],
                    async run(ctx) { delete ctx.tempVars['$54_step']; delete ctx.tempVars['$54_end']; },
                },
                {
                    loc: [245, 5],
                    async run(ctx) { ctx.localVars['row'] = 4; ctx.tempVars['$57_step'] = 1; ctx.tempVars['$57_end'] = 49; },
                },
                {
                    loc: [245, 5],
                    label: '$57_loopStart',
                },
                    {
                        loc: [245, 5],
                        async run(ctx) { const counterValue = ctx.localVars['row']; if ((ctx.tempVars['$57_step'] >= 0 && counterValue > ctx.tempVars['$57_end']) || (ctx.tempVars['$57_step'] < 0 && counterValue < ctx.tempVars['$57_end'])) { return { type: 'goto', destLabel: '$57_loopEnd' }; } },
                    },
                    {
                        loc: [246, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$58_0'] = ctx.runtime.roundHalfToEven(1);
                            const result = await ctx.executeProc(ctx, 'Set', [ctx.localVars, 'row'], [ctx.tempVars, '$58_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                            delete ctx.tempVars['$58_0'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [247, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$59_0'] = ctx.runtime.roundHalfToEven(80);
                            const result = await ctx.executeProc(ctx, 'Set', [ctx.localVars, 'row'], [ctx.tempVars, '$59_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                            delete ctx.tempVars['$59_0'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [248, 5],
                        async run(ctx) { ctx.localVars['row'] += ctx.tempVars['$57_step']; return { type: 'goto', destLabel: '$57_loopStart' }; },
                    },
                {
                    loc: [245, 5],
                    label: '$57_loopEnd',
                },
                {
                    loc: [245, 5],
                    async run(ctx) { delete ctx.tempVars['$57_step']; delete ctx.tempVars['$57_end']; },
                },
            ],
        },
        {
            loc: [254, 1],
            type: 'sub',
            name: 'Intro',
            localSymbols: [],
            paramSymbols: [],
            stmts: [
                {
                    loc: [255, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$60_0'] = ctx.runtime.roundHalfToEven(0);
                        const result = await ctx.runtime.executeBuiltinProc('SCREEN', [{"type":"single"}], [ctx.tempVars, '$60_0']);
                        delete ctx.tempVars['$60_0'];
                        return result;
                    })()); },
                },
                {
                    loc: [256, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$61_0'] = ctx.runtime.roundHalfToEven(80);
                        ctx.tempVars['$61_1'] = ctx.runtime.roundHalfToEven(25);
                        const result = await ctx.runtime.executeBuiltinProc('WIDTH', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$61_0'], [ctx.tempVars, '$61_1']);
                        delete ctx.tempVars['$61_0'];
                        delete ctx.tempVars['$61_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [257, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$62_0'] = ctx.runtime.roundHalfToEven(15);
                        ctx.tempVars['$62_1'] = ctx.runtime.roundHalfToEven(0);
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$62_0'], [ctx.tempVars, '$62_1']);
                        delete ctx.tempVars['$62_0'];
                        delete ctx.tempVars['$62_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [258, 5],
                    async run(ctx) { (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [260, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$63_0'] = ctx.runtime.roundHalfToEven(4);
                        ctx.tempVars['$63_1'] = "Q B a s i c   N i b b l e s";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$63_0'], [ctx.tempVars, '$63_1']);
                        delete ctx.tempVars['$63_0'];
                        delete ctx.tempVars['$63_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [261, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$64_0'] = ctx.runtime.roundHalfToEven(7);
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"}], [ctx.tempVars, '$64_0']);
                        delete ctx.tempVars['$64_0'];
                        return result;
                    })()); },
                },
                {
                    loc: [262, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$65_0'] = ctx.runtime.roundHalfToEven(6);
                        ctx.tempVars['$65_1'] = "Copyright (C) Microsoft Corporation 1990";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$65_0'], [ctx.tempVars, '$65_1']);
                        delete ctx.tempVars['$65_0'];
                        delete ctx.tempVars['$65_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [263, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$66_0'] = ctx.runtime.roundHalfToEven(8);
                        ctx.tempVars['$66_1'] = "Nibbles is a game for one or two players.  Navigate your snakes";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$66_0'], [ctx.tempVars, '$66_1']);
                        delete ctx.tempVars['$66_0'];
                        delete ctx.tempVars['$66_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [264, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$67_0'] = ctx.runtime.roundHalfToEven(9);
                        ctx.tempVars['$67_1'] = "around the game board trying to eat up numbers while avoiding";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$67_0'], [ctx.tempVars, '$67_1']);
                        delete ctx.tempVars['$67_0'];
                        delete ctx.tempVars['$67_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [265, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$68_0'] = ctx.runtime.roundHalfToEven(10);
                        ctx.tempVars['$68_1'] = "running into walls or other snakes.  The more numbers you eat up,";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$68_0'], [ctx.tempVars, '$68_1']);
                        delete ctx.tempVars['$68_0'];
                        delete ctx.tempVars['$68_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [266, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$69_0'] = ctx.runtime.roundHalfToEven(11);
                        ctx.tempVars['$69_1'] = "the more points you gain and the longer your snake becomes.";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$69_0'], [ctx.tempVars, '$69_1']);
                        delete ctx.tempVars['$69_0'];
                        delete ctx.tempVars['$69_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [267, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$70_0'] = ctx.runtime.roundHalfToEven(13);
                        ctx.tempVars['$70_1'] = " Game Controls ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$70_0'], [ctx.tempVars, '$70_1']);
                        delete ctx.tempVars['$70_0'];
                        delete ctx.tempVars['$70_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [268, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$71_0'] = ctx.runtime.roundHalfToEven(15);
                        ctx.tempVars['$71_1'] = "  General             Player 1               Player 2    ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$71_0'], [ctx.tempVars, '$71_1']);
                        delete ctx.tempVars['$71_0'];
                        delete ctx.tempVars['$71_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [269, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$72_0'] = ctx.runtime.roundHalfToEven(16);
                        ctx.tempVars['$72_1'] = "                        (Up)                   (Up)      ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$72_0'], [ctx.tempVars, '$72_1']);
                        delete ctx.tempVars['$72_0'];
                        delete ctx.tempVars['$72_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [270, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$73_0'] = ctx.runtime.roundHalfToEven(17);
                        ctx.tempVars['$73_1'] = (("P - Pause                " + (await (async () => {
                            ctx.tempVars['$74_0'] = ctx.runtime.roundHalfToEven(24);
                            const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$74_0']);
                            delete ctx.tempVars['$74_0'];
                            return result;
                        })())) + "                      W       ");
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$73_0'], [ctx.tempVars, '$73_1']);
                        delete ctx.tempVars['$73_0'];
                        delete ctx.tempVars['$73_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [271, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$75_0'] = ctx.runtime.roundHalfToEven(18);
                        ctx.tempVars['$75_1'] = (((("                     (Left) " + (await (async () => {
                            ctx.tempVars['$76_0'] = ctx.runtime.roundHalfToEven(27);
                            const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$76_0']);
                            delete ctx.tempVars['$76_0'];
                            return result;
                        })())) + "   ") + (await (async () => {
                            ctx.tempVars['$77_0'] = ctx.runtime.roundHalfToEven(26);
                            const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$77_0']);
                            delete ctx.tempVars['$77_0'];
                            return result;
                        })())) + " (Right)   (Left) A   D (Right)  ");
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$75_0'], [ctx.tempVars, '$75_1']);
                        delete ctx.tempVars['$75_0'];
                        delete ctx.tempVars['$75_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [272, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$78_0'] = ctx.runtime.roundHalfToEven(19);
                        ctx.tempVars['$78_1'] = (("                         " + (await (async () => {
                            ctx.tempVars['$79_0'] = ctx.runtime.roundHalfToEven(25);
                            const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$79_0']);
                            delete ctx.tempVars['$79_0'];
                            return result;
                        })())) + "                      S       ");
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$78_0'], [ctx.tempVars, '$78_1']);
                        delete ctx.tempVars['$78_0'];
                        delete ctx.tempVars['$78_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [273, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$80_0'] = ctx.runtime.roundHalfToEven(20);
                        ctx.tempVars['$80_1'] = "                       (Down)                 (Down)     ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$80_0'], [ctx.tempVars, '$80_1']);
                        delete ctx.tempVars['$80_0'];
                        delete ctx.tempVars['$80_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [274, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$81_0'] = ctx.runtime.roundHalfToEven(24);
                        ctx.tempVars['$81_1'] = "Press any key to continue";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$81_0'], [ctx.tempVars, '$81_1']);
                        delete ctx.tempVars['$81_0'];
                        delete ctx.tempVars['$81_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [276, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$82_0'] = "MBT160O1L8CDEDCDL4ECC";
                        const result = await ctx.runtime.executeBuiltinProc('PLAY', [{"type":"string"}], [ctx.tempVars, '$82_0']);
                        delete ctx.tempVars['$82_0'];
                        return result;
                    })()); },
                },
                {
                    loc: [277, 5],
                    async run(ctx) { (await (async () => {
                        const result = await ctx.executeProc(ctx, 'SparklePause', );
                        return result;
                    })()); },
                },
            ],
        },
        {
            loc: [283, 1],
            type: 'sub',
            name: 'Level',
            localSymbols: [{"name":"i","typeSpec":{"type":"integer"},"varType":"staticVar","varScope":"local"}],
            paramSymbols: [{"name":"WhatToDO","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"sammy","varType":"arg","typeSpec":{"type":"array","elementTypeSpec":{"type":"udt","name":"snaketype","fieldSpecs":[{"name":"head","typeSpec":{"type":"integer"}},{"name":"length","typeSpec":{"type":"integer"}},{"name":"row","typeSpec":{"type":"integer"}},{"name":"col","typeSpec":{"type":"integer"}},{"name":"direction","typeSpec":{"type":"integer"}},{"name":"lives","typeSpec":{"type":"integer"}},{"name":"score","typeSpec":{"type":"integer"}},{"name":"scolor","typeSpec":{"type":"integer"}},{"name":"alive","typeSpec":{"type":"integer"}}]},"dimensionSpecs":[]},"varScope":"local"}],
            stmts: [
                {
                    loc: [285, 5],
                    async run(ctx) { ctx.tempVars['$83_test'] = (ctx.args['WhatToDO'][0][ctx.args['WhatToDO'][1]]); },
                },
                {
                    loc: [287, 5],
                    async run(ctx) { if (!(ctx.tempVars['$83_test'] === ctx.globalVars['STARTOVER'])) { return { type: 'goto', destLabel: '$83_elif1' }; } },
                },
                    {
                        loc: [288, 9],
                        async run(ctx) { ctx.globalVars['curLevel'] = ctx.runtime.roundHalfToEven(1); },
                    },
                    {
                        loc: [287, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$83_endif' }; },
                    },
                {
                    loc: [289, 5],
                    label: '$83_elif1',
                },
                {
                    loc: [289, 5],
                    async run(ctx) { if (!(ctx.tempVars['$83_test'] === ctx.globalVars['NEXTLEVEL'])) { return { type: 'goto', destLabel: '$83_endif' }; } },
                },
                    {
                        loc: [290, 9],
                        async run(ctx) { ctx.globalVars['curLevel'] = ctx.runtime.roundHalfToEven((ctx.globalVars['curLevel'] + 1)); },
                    },
                {
                    label: '$83_endif',
                },
                {
                    loc: [285, 5],
                    async run(ctx) { delete ctx.tempVars['$83_test']; },
                },
                {
                    loc: [293, 5],
                    async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['head'] = ctx.runtime.roundHalfToEven(1); },
                },
                {
                    loc: [294, 5],
                    async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['length'] = ctx.runtime.roundHalfToEven(2); },
                },
                {
                    loc: [295, 5],
                    async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['alive'] = ctx.runtime.roundHalfToEven(ctx.globalVars['TRUE']); },
                },
                {
                    loc: [296, 5],
                    async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['head'] = ctx.runtime.roundHalfToEven(1); },
                },
                {
                    loc: [297, 5],
                    async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['length'] = ctx.runtime.roundHalfToEven(2); },
                },
                {
                    loc: [298, 5],
                    async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['alive'] = ctx.runtime.roundHalfToEven(ctx.globalVars['TRUE']); },
                },
                {
                    loc: [300, 5],
                    async run(ctx) { (await (async () => {
                        const result = await ctx.executeProc(ctx, 'InitColors', );
                        return result;
                    })()); },
                },
                {
                    loc: [302, 5],
                    async run(ctx) { ctx.tempVars['$84_test'] = ctx.globalVars['curLevel']; },
                },
                {
                    loc: [303, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 1)) { return { type: 'goto', destLabel: '$84_elif1' }; } },
                },
                    {
                        loc: [304, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(25); },
                    },
                    {
                        loc: [304, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(25); },
                    },
                    {
                        loc: [305, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(50); },
                    },
                    {
                        loc: [305, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(30); },
                    },
                    {
                        loc: [306, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(4); },
                    },
                    {
                        loc: [306, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(3); },
                    },
                    {
                        loc: [303, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [309, 5],
                    label: '$84_elif1',
                },
                {
                    loc: [309, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 2)) { return { type: 'goto', destLabel: '$84_elif2' }; } },
                },
                    {
                        loc: [310, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 20; ctx.tempVars['$85_step'] = 1; ctx.tempVars['$85_end'] = 60; },
                    },
                    {
                        loc: [310, 9],
                        label: '$85_loopStart',
                    },
                        {
                            loc: [310, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$85_step'] >= 0 && counterValue > ctx.tempVars['$85_end']) || (ctx.tempVars['$85_step'] < 0 && counterValue < ctx.tempVars['$85_end'])) { return { type: 'goto', destLabel: '$85_loopEnd' }; } },
                        },
                        {
                            loc: [311, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$86_0'] = ctx.runtime.roundHalfToEven(25);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$86_0'], [ctx.localStaticVars, 'i'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$86_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [312, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$85_step']; return { type: 'goto', destLabel: '$85_loopStart' }; },
                        },
                    {
                        loc: [310, 9],
                        label: '$85_loopEnd',
                    },
                    {
                        loc: [310, 9],
                        async run(ctx) { delete ctx.tempVars['$85_step']; delete ctx.tempVars['$85_end']; },
                    },
                    {
                        loc: [313, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(7); },
                    },
                    {
                        loc: [313, 27],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(43); },
                    },
                    {
                        loc: [314, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(60); },
                    },
                    {
                        loc: [314, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(20); },
                    },
                    {
                        loc: [315, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(3); },
                    },
                    {
                        loc: [315, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(4); },
                    },
                    {
                        loc: [309, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [317, 5],
                    label: '$84_elif2',
                },
                {
                    loc: [317, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 3)) { return { type: 'goto', destLabel: '$84_elif3' }; } },
                },
                    {
                        loc: [318, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 10; ctx.tempVars['$87_step'] = 1; ctx.tempVars['$87_end'] = 40; },
                    },
                    {
                        loc: [318, 9],
                        label: '$87_loopStart',
                    },
                        {
                            loc: [318, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$87_step'] >= 0 && counterValue > ctx.tempVars['$87_end']) || (ctx.tempVars['$87_step'] < 0 && counterValue < ctx.tempVars['$87_end'])) { return { type: 'goto', destLabel: '$87_loopEnd' }; } },
                        },
                        {
                            loc: [319, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$88_0'] = ctx.runtime.roundHalfToEven(20);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$88_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$88_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [320, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$89_0'] = ctx.runtime.roundHalfToEven(60);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$89_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$89_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [321, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$87_step']; return { type: 'goto', destLabel: '$87_loopStart' }; },
                        },
                    {
                        loc: [318, 9],
                        label: '$87_loopEnd',
                    },
                    {
                        loc: [318, 9],
                        async run(ctx) { delete ctx.tempVars['$87_step']; delete ctx.tempVars['$87_end']; },
                    },
                    {
                        loc: [322, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(25); },
                    },
                    {
                        loc: [322, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(25); },
                    },
                    {
                        loc: [323, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(50); },
                    },
                    {
                        loc: [323, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(30); },
                    },
                    {
                        loc: [324, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                    },
                    {
                        loc: [324, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                    },
                    {
                        loc: [317, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [326, 5],
                    label: '$84_elif3',
                },
                {
                    loc: [326, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 4)) { return { type: 'goto', destLabel: '$84_elif4' }; } },
                },
                    {
                        loc: [327, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 4; ctx.tempVars['$90_step'] = 1; ctx.tempVars['$90_end'] = 30; },
                    },
                    {
                        loc: [327, 9],
                        label: '$90_loopStart',
                    },
                        {
                            loc: [327, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$90_step'] >= 0 && counterValue > ctx.tempVars['$90_end']) || (ctx.tempVars['$90_step'] < 0 && counterValue < ctx.tempVars['$90_end'])) { return { type: 'goto', destLabel: '$90_loopEnd' }; } },
                        },
                        {
                            loc: [328, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$91_0'] = ctx.runtime.roundHalfToEven(20);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$91_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$91_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [329, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$92_0'] = ctx.runtime.roundHalfToEven((53 - ctx.localStaticVars['i']));
                                ctx.tempVars['$92_1'] = ctx.runtime.roundHalfToEven(60);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$92_0'], [ctx.tempVars, '$92_1'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$92_0'];
                                delete ctx.tempVars['$92_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [330, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$90_step']; return { type: 'goto', destLabel: '$90_loopStart' }; },
                        },
                    {
                        loc: [327, 9],
                        label: '$90_loopEnd',
                    },
                    {
                        loc: [327, 9],
                        async run(ctx) { delete ctx.tempVars['$90_step']; delete ctx.tempVars['$90_end']; },
                    },
                    {
                        loc: [331, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 2; ctx.tempVars['$93_step'] = 1; ctx.tempVars['$93_end'] = 40; },
                    },
                    {
                        loc: [331, 9],
                        label: '$93_loopStart',
                    },
                        {
                            loc: [331, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$93_step'] >= 0 && counterValue > ctx.tempVars['$93_end']) || (ctx.tempVars['$93_step'] < 0 && counterValue < ctx.tempVars['$93_end'])) { return { type: 'goto', destLabel: '$93_loopEnd' }; } },
                        },
                        {
                            loc: [332, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$94_0'] = ctx.runtime.roundHalfToEven(38);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$94_0'], [ctx.localStaticVars, 'i'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$94_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [333, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$95_0'] = ctx.runtime.roundHalfToEven(15);
                                ctx.tempVars['$95_1'] = ctx.runtime.roundHalfToEven((81 - ctx.localStaticVars['i']));
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$95_0'], [ctx.tempVars, '$95_1'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$95_0'];
                                delete ctx.tempVars['$95_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [334, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$93_step']; return { type: 'goto', destLabel: '$93_loopStart' }; },
                        },
                    {
                        loc: [331, 9],
                        label: '$93_loopEnd',
                    },
                    {
                        loc: [331, 9],
                        async run(ctx) { delete ctx.tempVars['$93_step']; delete ctx.tempVars['$93_end']; },
                    },
                    {
                        loc: [335, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(7); },
                    },
                    {
                        loc: [335, 27],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(43); },
                    },
                    {
                        loc: [336, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(60); },
                    },
                    {
                        loc: [336, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(20); },
                    },
                    {
                        loc: [337, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(3); },
                    },
                    {
                        loc: [337, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(4); },
                    },
                    {
                        loc: [326, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [339, 5],
                    label: '$84_elif4',
                },
                {
                    loc: [339, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 5)) { return { type: 'goto', destLabel: '$84_elif5' }; } },
                },
                    {
                        loc: [340, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 13; ctx.tempVars['$96_step'] = 1; ctx.tempVars['$96_end'] = 39; },
                    },
                    {
                        loc: [340, 9],
                        label: '$96_loopStart',
                    },
                        {
                            loc: [340, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$96_step'] >= 0 && counterValue > ctx.tempVars['$96_end']) || (ctx.tempVars['$96_step'] < 0 && counterValue < ctx.tempVars['$96_end'])) { return { type: 'goto', destLabel: '$96_loopEnd' }; } },
                        },
                        {
                            loc: [341, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$97_0'] = ctx.runtime.roundHalfToEven(21);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$97_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$97_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [342, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$98_0'] = ctx.runtime.roundHalfToEven(59);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$98_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$98_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [343, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$96_step']; return { type: 'goto', destLabel: '$96_loopStart' }; },
                        },
                    {
                        loc: [340, 9],
                        label: '$96_loopEnd',
                    },
                    {
                        loc: [340, 9],
                        async run(ctx) { delete ctx.tempVars['$96_step']; delete ctx.tempVars['$96_end']; },
                    },
                    {
                        loc: [344, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 23; ctx.tempVars['$99_step'] = 1; ctx.tempVars['$99_end'] = 57; },
                    },
                    {
                        loc: [344, 9],
                        label: '$99_loopStart',
                    },
                        {
                            loc: [344, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$99_step'] >= 0 && counterValue > ctx.tempVars['$99_end']) || (ctx.tempVars['$99_step'] < 0 && counterValue < ctx.tempVars['$99_end'])) { return { type: 'goto', destLabel: '$99_loopEnd' }; } },
                        },
                        {
                            loc: [345, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$100_0'] = ctx.runtime.roundHalfToEven(11);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$100_0'], [ctx.localStaticVars, 'i'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$100_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [346, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$101_0'] = ctx.runtime.roundHalfToEven(41);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$101_0'], [ctx.localStaticVars, 'i'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$101_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [347, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$99_step']; return { type: 'goto', destLabel: '$99_loopStart' }; },
                        },
                    {
                        loc: [344, 9],
                        label: '$99_loopEnd',
                    },
                    {
                        loc: [344, 9],
                        async run(ctx) { delete ctx.tempVars['$99_step']; delete ctx.tempVars['$99_end']; },
                    },
                    {
                        loc: [348, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(25); },
                    },
                    {
                        loc: [348, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(25); },
                    },
                    {
                        loc: [349, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(50); },
                    },
                    {
                        loc: [349, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(30); },
                    },
                    {
                        loc: [350, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                    },
                    {
                        loc: [350, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                    },
                    {
                        loc: [339, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [352, 5],
                    label: '$84_elif5',
                },
                {
                    loc: [352, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 6)) { return { type: 'goto', destLabel: '$84_elif6' }; } },
                },
                    {
                        loc: [353, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 4; ctx.tempVars['$102_step'] = 1; ctx.tempVars['$102_end'] = 49; },
                    },
                    {
                        loc: [353, 9],
                        label: '$102_loopStart',
                    },
                        {
                            loc: [353, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$102_step'] >= 0 && counterValue > ctx.tempVars['$102_end']) || (ctx.tempVars['$102_step'] < 0 && counterValue < ctx.tempVars['$102_end'])) { return { type: 'goto', destLabel: '$102_loopEnd' }; } },
                        },
                        {
                            loc: [354, 13],
                            async run(ctx) { if (!(((ctx.localStaticVars['i'] > 30) || (ctx.localStaticVars['i'] < 23)))) { return { type: 'goto', destLabel: '$103_endif' }; } },
                        },
                            {
                                loc: [355, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$104_0'] = ctx.runtime.roundHalfToEven(10);
                                    const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$104_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                    delete ctx.tempVars['$104_0'];
                                    return result;
                                })()); },
                            },
                            {
                                loc: [356, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$105_0'] = ctx.runtime.roundHalfToEven(20);
                                    const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$105_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                    delete ctx.tempVars['$105_0'];
                                    return result;
                                })()); },
                            },
                            {
                                loc: [357, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$106_0'] = ctx.runtime.roundHalfToEven(30);
                                    const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$106_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                    delete ctx.tempVars['$106_0'];
                                    return result;
                                })()); },
                            },
                            {
                                loc: [358, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$107_0'] = ctx.runtime.roundHalfToEven(40);
                                    const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$107_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                    delete ctx.tempVars['$107_0'];
                                    return result;
                                })()); },
                            },
                            {
                                loc: [359, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$108_0'] = ctx.runtime.roundHalfToEven(50);
                                    const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$108_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                    delete ctx.tempVars['$108_0'];
                                    return result;
                                })()); },
                            },
                            {
                                loc: [360, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$109_0'] = ctx.runtime.roundHalfToEven(60);
                                    const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$109_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                    delete ctx.tempVars['$109_0'];
                                    return result;
                                })()); },
                            },
                            {
                                loc: [361, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$110_0'] = ctx.runtime.roundHalfToEven(70);
                                    const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$110_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                    delete ctx.tempVars['$110_0'];
                                    return result;
                                })()); },
                            },
                        {
                            label: '$103_endif',
                        },
                        {
                            loc: [363, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$102_step']; return { type: 'goto', destLabel: '$102_loopStart' }; },
                        },
                    {
                        loc: [353, 9],
                        label: '$102_loopEnd',
                    },
                    {
                        loc: [353, 9],
                        async run(ctx) { delete ctx.tempVars['$102_step']; delete ctx.tempVars['$102_end']; },
                    },
                    {
                        loc: [364, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(7); },
                    },
                    {
                        loc: [364, 27],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(43); },
                    },
                    {
                        loc: [365, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(65); },
                    },
                    {
                        loc: [365, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(15); },
                    },
                    {
                        loc: [366, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                    },
                    {
                        loc: [366, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                    },
                    {
                        loc: [352, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [368, 5],
                    label: '$84_elif6',
                },
                {
                    loc: [368, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 7)) { return { type: 'goto', destLabel: '$84_elif7' }; } },
                },
                    {
                        loc: [369, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 4; ctx.tempVars['$111_step'] = 2; ctx.tempVars['$111_end'] = 49; },
                    },
                    {
                        loc: [369, 9],
                        label: '$111_loopStart',
                    },
                        {
                            loc: [369, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$111_step'] >= 0 && counterValue > ctx.tempVars['$111_end']) || (ctx.tempVars['$111_step'] < 0 && counterValue < ctx.tempVars['$111_end'])) { return { type: 'goto', destLabel: '$111_loopEnd' }; } },
                        },
                        {
                            loc: [370, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$112_0'] = ctx.runtime.roundHalfToEven(40);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$112_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$112_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [371, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$111_step']; return { type: 'goto', destLabel: '$111_loopStart' }; },
                        },
                    {
                        loc: [369, 9],
                        label: '$111_loopEnd',
                    },
                    {
                        loc: [369, 9],
                        async run(ctx) { delete ctx.tempVars['$111_step']; delete ctx.tempVars['$111_end']; },
                    },
                    {
                        loc: [372, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(7); },
                    },
                    {
                        loc: [372, 27],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(43); },
                    },
                    {
                        loc: [373, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(65); },
                    },
                    {
                        loc: [373, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(15); },
                    },
                    {
                        loc: [374, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                    },
                    {
                        loc: [374, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                    },
                    {
                        loc: [368, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [376, 5],
                    label: '$84_elif7',
                },
                {
                    loc: [376, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 8)) { return { type: 'goto', destLabel: '$84_elif8' }; } },
                },
                    {
                        loc: [377, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 4; ctx.tempVars['$113_step'] = 1; ctx.tempVars['$113_end'] = 40; },
                    },
                    {
                        loc: [377, 9],
                        label: '$113_loopStart',
                    },
                        {
                            loc: [377, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$113_step'] >= 0 && counterValue > ctx.tempVars['$113_end']) || (ctx.tempVars['$113_step'] < 0 && counterValue < ctx.tempVars['$113_end'])) { return { type: 'goto', destLabel: '$113_loopEnd' }; } },
                        },
                        {
                            loc: [378, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$114_0'] = ctx.runtime.roundHalfToEven(10);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$114_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$114_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [379, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$115_0'] = ctx.runtime.roundHalfToEven((53 - ctx.localStaticVars['i']));
                                ctx.tempVars['$115_1'] = ctx.runtime.roundHalfToEven(20);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$115_0'], [ctx.tempVars, '$115_1'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$115_0'];
                                delete ctx.tempVars['$115_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [380, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$116_0'] = ctx.runtime.roundHalfToEven(30);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$116_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$116_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [381, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$117_0'] = ctx.runtime.roundHalfToEven((53 - ctx.localStaticVars['i']));
                                ctx.tempVars['$117_1'] = ctx.runtime.roundHalfToEven(40);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$117_0'], [ctx.tempVars, '$117_1'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$117_0'];
                                delete ctx.tempVars['$117_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [382, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$118_0'] = ctx.runtime.roundHalfToEven(50);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$118_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$118_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [383, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$119_0'] = ctx.runtime.roundHalfToEven((53 - ctx.localStaticVars['i']));
                                ctx.tempVars['$119_1'] = ctx.runtime.roundHalfToEven(60);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$119_0'], [ctx.tempVars, '$119_1'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$119_0'];
                                delete ctx.tempVars['$119_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [384, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$120_0'] = ctx.runtime.roundHalfToEven(70);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$120_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$120_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [385, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$113_step']; return { type: 'goto', destLabel: '$113_loopStart' }; },
                        },
                    {
                        loc: [377, 9],
                        label: '$113_loopEnd',
                    },
                    {
                        loc: [377, 9],
                        async run(ctx) { delete ctx.tempVars['$113_step']; delete ctx.tempVars['$113_end']; },
                    },
                    {
                        loc: [386, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(7); },
                    },
                    {
                        loc: [386, 27],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(43); },
                    },
                    {
                        loc: [387, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(65); },
                    },
                    {
                        loc: [387, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(15); },
                    },
                    {
                        loc: [388, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                    },
                    {
                        loc: [388, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                    },
                    {
                        loc: [376, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [390, 5],
                    label: '$84_elif8',
                },
                {
                    loc: [390, 5],
                    async run(ctx) { if (!(ctx.tempVars['$84_test'] === 9)) { return { type: 'goto', destLabel: '$84_else' }; } },
                },
                    {
                        loc: [391, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 6; ctx.tempVars['$121_step'] = 1; ctx.tempVars['$121_end'] = 47; },
                    },
                    {
                        loc: [391, 9],
                        label: '$121_loopStart',
                    },
                        {
                            loc: [391, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$121_step'] >= 0 && counterValue > ctx.tempVars['$121_end']) || (ctx.tempVars['$121_step'] < 0 && counterValue < ctx.tempVars['$121_end'])) { return { type: 'goto', destLabel: '$121_loopEnd' }; } },
                        },
                        {
                            loc: [392, 13],
                            async run(ctx) { (await (async () => {
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.localStaticVars, 'i'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                return result;
                            })()); },
                        },
                        {
                            loc: [393, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$122_0'] = ctx.runtime.roundHalfToEven((ctx.localStaticVars['i'] + 28));
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$122_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$122_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [394, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$121_step']; return { type: 'goto', destLabel: '$121_loopStart' }; },
                        },
                    {
                        loc: [391, 9],
                        label: '$121_loopEnd',
                    },
                    {
                        loc: [391, 9],
                        async run(ctx) { delete ctx.tempVars['$121_step']; delete ctx.tempVars['$121_end']; },
                    },
                    {
                        loc: [395, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(40); },
                    },
                    {
                        loc: [395, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(15); },
                    },
                    {
                        loc: [396, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(75); },
                    },
                    {
                        loc: [396, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(5); },
                    },
                    {
                        loc: [397, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                    },
                    {
                        loc: [397, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                    },
                    {
                        loc: [390, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$84_endif' }; },
                    },
                {
                    loc: [399, 5],
                    label: '$84_else',
                },
                    {
                        loc: [400, 9],
                        async run(ctx) { ctx.localStaticVars['i'] = 4; ctx.tempVars['$123_step'] = 2; ctx.tempVars['$123_end'] = 49; },
                    },
                    {
                        loc: [400, 9],
                        label: '$123_loopStart',
                    },
                        {
                            loc: [400, 9],
                            async run(ctx) { const counterValue = ctx.localStaticVars['i']; if ((ctx.tempVars['$123_step'] >= 0 && counterValue > ctx.tempVars['$123_end']) || (ctx.tempVars['$123_step'] < 0 && counterValue < ctx.tempVars['$123_end'])) { return { type: 'goto', destLabel: '$123_loopEnd' }; } },
                        },
                        {
                            loc: [401, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$124_0'] = ctx.runtime.roundHalfToEven(10);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$124_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$124_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [402, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$125_0'] = ctx.runtime.roundHalfToEven((ctx.localStaticVars['i'] + 1));
                                ctx.tempVars['$125_1'] = ctx.runtime.roundHalfToEven(20);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$125_0'], [ctx.tempVars, '$125_1'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$125_0'];
                                delete ctx.tempVars['$125_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [403, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$126_0'] = ctx.runtime.roundHalfToEven(30);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$126_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$126_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [404, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$127_0'] = ctx.runtime.roundHalfToEven((ctx.localStaticVars['i'] + 1));
                                ctx.tempVars['$127_1'] = ctx.runtime.roundHalfToEven(40);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$127_0'], [ctx.tempVars, '$127_1'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$127_0'];
                                delete ctx.tempVars['$127_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [405, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$128_0'] = ctx.runtime.roundHalfToEven(50);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$128_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$128_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [406, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$129_0'] = ctx.runtime.roundHalfToEven((ctx.localStaticVars['i'] + 1));
                                ctx.tempVars['$129_1'] = ctx.runtime.roundHalfToEven(60);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.tempVars, '$129_0'], [ctx.tempVars, '$129_1'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$129_0'];
                                delete ctx.tempVars['$129_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [407, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$130_0'] = ctx.runtime.roundHalfToEven(70);
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localStaticVars, 'i'], [ctx.tempVars, '$130_0'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 3)]);
                                delete ctx.tempVars['$130_0'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [408, 9],
                            async run(ctx) { ctx.localStaticVars['i'] += ctx.tempVars['$123_step']; return { type: 'goto', destLabel: '$123_loopStart' }; },
                        },
                    {
                        loc: [400, 9],
                        label: '$123_loopEnd',
                    },
                    {
                        loc: [400, 9],
                        async run(ctx) { delete ctx.tempVars['$123_step']; delete ctx.tempVars['$123_end']; },
                    },
                    {
                        loc: [409, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['row'] = ctx.runtime.roundHalfToEven(7); },
                    },
                    {
                        loc: [409, 27],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(43); },
                    },
                    {
                        loc: [410, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['col'] = ctx.runtime.roundHalfToEven(65); },
                    },
                    {
                        loc: [410, 28],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['col'] = ctx.runtime.roundHalfToEven(15); },
                    },
                    {
                        loc: [411, 9],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                    },
                    {
                        loc: [411, 33],
                        async run(ctx) { ctx.args['sammy'][0][ctx.args['sammy'][1]].values[ctx.args['sammy'][0][ctx.args['sammy'][1]].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                    },
                {
                    label: '$84_endif',
                },
                {
                    loc: [302, 5],
                    async run(ctx) { delete ctx.tempVars['$84_test']; },
                },
            ],
        },
        {
            loc: [418, 1],
            type: 'sub',
            name: 'PlayNibbles',
            localSymbols: [{"name":"sammyBody","typeSpec":{"type":"array","elementTypeSpec":{"type":"udt","name":"snakeBody","fieldSpecs":[{"name":"row","typeSpec":{"type":"integer"}},{"name":"col","typeSpec":{"type":"integer"}}]},"dimensionSpecs":[[0,0],[0,0]]},"varType":"var","varScope":"local"},{"name":"sammy","typeSpec":{"type":"array","elementTypeSpec":{"type":"udt","name":"snaketype","fieldSpecs":[{"name":"head","typeSpec":{"type":"integer"}},{"name":"length","typeSpec":{"type":"integer"}},{"name":"row","typeSpec":{"type":"integer"}},{"name":"col","typeSpec":{"type":"integer"}},{"name":"direction","typeSpec":{"type":"integer"}},{"name":"lives","typeSpec":{"type":"integer"}},{"name":"score","typeSpec":{"type":"integer"}},{"name":"scolor","typeSpec":{"type":"integer"}},{"name":"alive","typeSpec":{"type":"integer"}}]},"dimensionSpecs":[[0,0]]},"varType":"var","varScope":"local"},{"name":"startRow1","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"startCol1","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"startRow2","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"startCol2","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"curSpeed","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"gameOver","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"number","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"nonum","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"playerDied","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"numberRow","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"NumberCol","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"sisterRow","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"count","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"a#","typeSpec":{"type":"double"},"varType":"var","varScope":"local"},{"name":"kbd$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"a","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"tail","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"}],
            paramSymbols: [{"name":"NumPlayers","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"speed","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"diff$","varType":"arg","typeSpec":{"type":"string"},"varScope":"local"}],
            stmts: [
                {
                    loc: [421, 5],
                    async run(ctx) { ctx.localVars['sammyBody'].init({"type":"udt","name":"snakeBody","fieldSpecs":[{"name":"row","typeSpec":{"type":"integer"}},{"name":"col","typeSpec":{"type":"integer"}}]}, [[0, (ctx.globalVars['MAXSNAKELENGTH'] - 1)],[1, 2],]);  },
                },
                {
                    loc: [422, 5],
                    async run(ctx) { ctx.localVars['sammy'].init({"type":"udt","name":"snaketype","fieldSpecs":[{"name":"head","typeSpec":{"type":"integer"}},{"name":"length","typeSpec":{"type":"integer"}},{"name":"row","typeSpec":{"type":"integer"}},{"name":"col","typeSpec":{"type":"integer"}},{"name":"direction","typeSpec":{"type":"integer"}},{"name":"lives","typeSpec":{"type":"integer"}},{"name":"score","typeSpec":{"type":"integer"}},{"name":"scolor","typeSpec":{"type":"integer"}},{"name":"alive","typeSpec":{"type":"integer"}}]}, [[1, 2],]);  },
                },
                {
                    loc: [423, 5],
                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['lives'] = ctx.runtime.roundHalfToEven(5); },
                },
                {
                    loc: [424, 5],
                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['score'] = ctx.runtime.roundHalfToEven(0); },
                },
                {
                    loc: [425, 5],
                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['scolor'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 1)]; },
                },
                {
                    loc: [426, 5],
                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['lives'] = ctx.runtime.roundHalfToEven(5); },
                },
                {
                    loc: [427, 5],
                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['score'] = ctx.runtime.roundHalfToEven(0); },
                },
                {
                    loc: [428, 5],
                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['scolor'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 2)]; },
                },
                {
                    loc: [430, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$131_0'] = ctx.runtime.roundHalfToEven(ctx.globalVars['STARTOVER']);
                        const result = await ctx.executeProc(ctx, 'Level', [ctx.tempVars, '$131_0'], [ctx.localVars, 'sammy']);
                        delete ctx.tempVars['$131_0'];
                        return result;
                    })()); },
                },
                {
                    loc: [431, 5],
                    async run(ctx) { ctx.localVars['startRow1'] = ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['row']; },
                },
                {
                    loc: [431, 31],
                    async run(ctx) { ctx.localVars['startCol1'] = ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['col']; },
                },
                {
                    loc: [432, 5],
                    async run(ctx) { ctx.localVars['startRow2'] = ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['row']; },
                },
                {
                    loc: [432, 31],
                    async run(ctx) { ctx.localVars['startCol2'] = ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['col']; },
                },
                {
                    loc: [434, 5],
                    async run(ctx) { ctx.localVars['curSpeed'] = ctx.args['speed'][0][ctx.args['speed'][1]]; },
                },
                {
                    loc: [438, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$132_0'] = (("     Level" + (await (async () => {
                            ctx.tempVars['$133_0'] = ctx.globalVars['curLevel'];
                            const result = await ctx.runtime.executeBuiltinProc('STR$', [{"type":"integer"}], [ctx.tempVars, '$133_0']);
                            delete ctx.tempVars['$133_0'];
                            return result;
                        })())) + ",  Push Space");
                        const result = await ctx.executeProc(ctx, 'SpacePause', [ctx.tempVars, '$132_0']);
                        delete ctx.tempVars['$132_0'];
                        return result;
                    })()); },
                },
                {
                    loc: [439, 5],
                    async run(ctx) { ctx.localVars['gameOver'] = ctx.globalVars['FALSE']; },
                },
                {
                    loc: [440, 5],
                    label: '$134_loopStart',
                },
                    {
                        loc: [441, 9],
                        async run(ctx) { if (!((ctx.args['NumPlayers'][0][ctx.args['NumPlayers'][1]] === 1))) { return { type: 'goto', destLabel: '$135_endif' }; } },
                    },
                        {
                            loc: [442, 13],
                            async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(0); },
                        },
                    {
                        label: '$135_endif',
                    },
                    {
                        loc: [445, 9],
                        async run(ctx) { ctx.localVars['number'] = ctx.runtime.roundHalfToEven(1); },
                    },
                    {
                        loc: [446, 9],
                        async run(ctx) { ctx.localVars['nonum'] = ctx.runtime.roundHalfToEven(ctx.globalVars['TRUE']); },
                    },
                    {
                        loc: [448, 9],
                        async run(ctx) { ctx.localVars['playerDied'] = ctx.globalVars['FALSE']; },
                    },
                    {
                        loc: [449, 9],
                        async run(ctx) { (await (async () => {
                            const result = await ctx.executeProc(ctx, 'PrintScore', ctx.args['NumPlayers'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'lives'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'lives']);
                            return result;
                        })()); },
                    },
                    {
                        loc: [450, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$136_0'] = "T160O1>L20CDEDCDL10ECC";
                            const result = await ctx.runtime.executeBuiltinProc('PLAY', [{"type":"string"}], [ctx.tempVars, '$136_0']);
                            delete ctx.tempVars['$136_0'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [452, 9],
                        label: '$137_loopStart',
                    },
                        {
                            loc: [454, 13],
                            async run(ctx) { if (!((ctx.localVars['nonum'] === ctx.globalVars['TRUE']))) { return { type: 'goto', destLabel: '$138_endif' }; } },
                        },
                            {
                                loc: [455, 17],
                                label: '$139_loopStart',
                            },
                                {
                                    loc: [456, 21],
                                    async run(ctx) { ctx.localVars['numberRow'] = (await (async () => {
                                        ctx.tempVars['$140_0'] = (((await (async () => {
                                            ctx.tempVars['$141_0'] = ctx.runtime.roundHalfToEven(1);
                                            const result = await ctx.runtime.executeBuiltinProc('RND', [{"type":"single"}], [ctx.tempVars, '$141_0']);
                                            delete ctx.tempVars['$141_0'];
                                            return result;
                                        })()) * 47) + 3);
                                        const result = await ctx.runtime.executeBuiltinProc('INT', [{"type":"double"}], [ctx.tempVars, '$140_0']);
                                        delete ctx.tempVars['$140_0'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [457, 21],
                                    async run(ctx) { ctx.localVars['NumberCol'] = (await (async () => {
                                        ctx.tempVars['$142_0'] = (((await (async () => {
                                            ctx.tempVars['$143_0'] = ctx.runtime.roundHalfToEven(1);
                                            const result = await ctx.runtime.executeBuiltinProc('RND', [{"type":"single"}], [ctx.tempVars, '$143_0']);
                                            delete ctx.tempVars['$143_0'];
                                            return result;
                                        })()) * 78) + 2);
                                        const result = await ctx.runtime.executeBuiltinProc('INT', [{"type":"double"}], [ctx.tempVars, '$142_0']);
                                        delete ctx.tempVars['$142_0'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [458, 21],
                                    async run(ctx) { ctx.localVars['sisterRow'] = (ctx.localVars['numberRow'] + ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.localVars['numberRow'])][ctx.globalVars['arena'].getIdx(1, ctx.localVars['NumberCol'])].values['sister']); },
                                },
                            {
                                loc: [455, 17],
                                async run(ctx) { if (((!(await (async () => {
                                const result = await ctx.executeProc(ctx, 'PointIsThere', [ctx.localVars, 'numberRow'], [ctx.localVars, 'NumberCol'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 4)]);
                                return result;
                            })())) && (!(await (async () => {
                                const result = await ctx.executeProc(ctx, 'PointIsThere', [ctx.localVars, 'sisterRow'], [ctx.localVars, 'NumberCol'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 4)]);
                                return result;
                            })())))) { return { type: 'goto', destLabel: '$139_loopEnd' }; } },
                            },
                            {
                                loc: [455, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$139_loopStart' }; },
                            },
                            {
                                loc: [455, 17],
                                label: '$139_loopEnd',
                            },
                            {
                                loc: [460, 17],
                                async run(ctx) { ctx.localVars['numberRow'] = ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.localVars['numberRow'])][ctx.globalVars['arena'].getIdx(1, ctx.localVars['NumberCol'])].values['realRow']; },
                            },
                            {
                                loc: [461, 17],
                                async run(ctx) { ctx.localVars['nonum'] = ctx.globalVars['FALSE']; },
                            },
                            {
                                loc: [462, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$144_0'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 1)];
                                    ctx.tempVars['$144_1'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 4)];
                                    const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$144_0'], [ctx.tempVars, '$144_1']);
                                    delete ctx.tempVars['$144_0'];
                                    delete ctx.tempVars['$144_1'];
                                    return result;
                                })()); },
                            },
                            {
                                loc: [463, 17],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$145_0'] = ctx.localVars['numberRow'];
                                    ctx.tempVars['$145_1'] = ctx.localVars['NumberCol'];
                                    const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$145_0'], [ctx.tempVars, '$145_1']);
                                    delete ctx.tempVars['$145_0'];
                                    delete ctx.tempVars['$145_1'];
                                    return result;
                                })()); },
                            },
                            {
                                loc: [464, 17],
                                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                                    ctx.tempVars['$146_0'] = (await (async () => {
                                        ctx.tempVars['$147_0'] = ctx.localVars['number'];
                                        const result = await ctx.runtime.executeBuiltinProc('STR$', [{"type":"integer"}], [ctx.tempVars, '$147_0']);
                                        delete ctx.tempVars['$147_0'];
                                        return result;
                                    })());
                                    ctx.tempVars['$146_1'] = ctx.runtime.roundHalfToEven(1);
                                    const result = await ctx.runtime.executeBuiltinProc('RIGHT$', [{"type":"string"},{"type":"single"}], [ctx.tempVars, '$146_0'], [ctx.tempVars, '$146_1']);
                                    delete ctx.tempVars['$146_0'];
                                    delete ctx.tempVars['$146_1'];
                                    return result;
                                })()) }, { type: 'semicolon' }, ); },
                            },
                            {
                                loc: [465, 17],
                                async run(ctx) { ctx.localVars['count'] = ctx.runtime.roundHalfToEven(0); },
                            },
                        {
                            label: '$138_endif',
                        },
                        {
                            loc: [469, 13],
                            async run(ctx) { ctx.localVars['a#'] = 1; ctx.tempVars['$148_step'] = 1; ctx.tempVars['$148_end'] = ctx.localVars['curSpeed']; },
                        },
                        {
                            loc: [469, 13],
                            label: '$148_loopStart',
                        },
                            {
                                loc: [469, 13],
                                async run(ctx) { const counterValue = ctx.localVars['a#']; if ((ctx.tempVars['$148_step'] >= 0 && counterValue > ctx.tempVars['$148_end']) || (ctx.tempVars['$148_step'] < 0 && counterValue < ctx.tempVars['$148_end'])) { return { type: 'goto', destLabel: '$148_loopEnd' }; } },
                            },
                            {
                                loc: [469, 38],
                                async run(ctx) { ctx.localVars['a#'] += ctx.tempVars['$148_step']; return { type: 'goto', destLabel: '$148_loopStart' }; },
                            },
                        {
                            loc: [469, 13],
                            label: '$148_loopEnd',
                        },
                        {
                            loc: [469, 13],
                            async run(ctx) { delete ctx.tempVars['$148_step']; delete ctx.tempVars['$148_end']; },
                        },
                        {
                            loc: [472, 13],
                            async run(ctx) { ctx.localVars['kbd$'] = (await (async () => {
                                const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                                return result;
                            })()); },
                        },
                        {
                            loc: [473, 13],
                            async run(ctx) { ctx.tempVars['$149_test'] = ctx.localVars['kbd$']; },
                        },
                        {
                            loc: [474, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === "w" || ctx.tempVars['$149_test'] === "W")) { return { type: 'goto', destLabel: '$149_elif1' }; } },
                        },
                            {
                                loc: [474, 32],
                                async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['direction'] != 2))) { return { type: 'goto', destLabel: '$150_endif' }; } },
                            },
                                {
                                    loc: [474, 64],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                                },
                            {
                                label: '$150_endif',
                            },
                            {
                                loc: [474, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$149_endif' }; },
                            },
                        {
                            loc: [475, 17],
                            label: '$149_elif1',
                        },
                        {
                            loc: [475, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === "s" || ctx.tempVars['$149_test'] === "S")) { return { type: 'goto', destLabel: '$149_elif2' }; } },
                        },
                            {
                                loc: [475, 32],
                                async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['direction'] != 1))) { return { type: 'goto', destLabel: '$151_endif' }; } },
                            },
                                {
                                    loc: [475, 64],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                                },
                            {
                                label: '$151_endif',
                            },
                            {
                                loc: [475, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$149_endif' }; },
                            },
                        {
                            loc: [476, 17],
                            label: '$149_elif2',
                        },
                        {
                            loc: [476, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === "a" || ctx.tempVars['$149_test'] === "A")) { return { type: 'goto', destLabel: '$149_elif3' }; } },
                        },
                            {
                                loc: [476, 32],
                                async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['direction'] != 4))) { return { type: 'goto', destLabel: '$152_endif' }; } },
                            },
                                {
                                    loc: [476, 64],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(3); },
                                },
                            {
                                label: '$152_endif',
                            },
                            {
                                loc: [476, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$149_endif' }; },
                            },
                        {
                            loc: [477, 17],
                            label: '$149_elif3',
                        },
                        {
                            loc: [477, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === "d" || ctx.tempVars['$149_test'] === "D")) { return { type: 'goto', destLabel: '$149_elif4' }; } },
                        },
                            {
                                loc: [477, 32],
                                async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['direction'] != 3))) { return { type: 'goto', destLabel: '$153_endif' }; } },
                            },
                                {
                                    loc: [477, 64],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['direction'] = ctx.runtime.roundHalfToEven(4); },
                                },
                            {
                                label: '$153_endif',
                            },
                            {
                                loc: [477, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$149_endif' }; },
                            },
                        {
                            loc: [478, 17],
                            label: '$149_elif4',
                        },
                        {
                            loc: [478, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === ((await (async () => {
                                ctx.tempVars['$154_0'] = ctx.runtime.roundHalfToEven(0);
                                const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$154_0']);
                                delete ctx.tempVars['$154_0'];
                                return result;
                            })()) + "H"))) { return { type: 'goto', destLabel: '$149_elif5' }; } },
                        },
                            {
                                loc: [478, 37],
                                async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['direction'] != 2))) { return { type: 'goto', destLabel: '$155_endif' }; } },
                            },
                                {
                                    loc: [478, 69],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(1); },
                                },
                            {
                                label: '$155_endif',
                            },
                            {
                                loc: [478, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$149_endif' }; },
                            },
                        {
                            loc: [479, 17],
                            label: '$149_elif5',
                        },
                        {
                            loc: [479, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === ((await (async () => {
                                ctx.tempVars['$156_0'] = ctx.runtime.roundHalfToEven(0);
                                const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$156_0']);
                                delete ctx.tempVars['$156_0'];
                                return result;
                            })()) + "P"))) { return { type: 'goto', destLabel: '$149_elif6' }; } },
                        },
                            {
                                loc: [479, 37],
                                async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['direction'] != 1))) { return { type: 'goto', destLabel: '$157_endif' }; } },
                            },
                                {
                                    loc: [479, 69],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(2); },
                                },
                            {
                                label: '$157_endif',
                            },
                            {
                                loc: [479, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$149_endif' }; },
                            },
                        {
                            loc: [480, 17],
                            label: '$149_elif6',
                        },
                        {
                            loc: [480, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === ((await (async () => {
                                ctx.tempVars['$158_0'] = ctx.runtime.roundHalfToEven(0);
                                const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$158_0']);
                                delete ctx.tempVars['$158_0'];
                                return result;
                            })()) + "K"))) { return { type: 'goto', destLabel: '$149_elif7' }; } },
                        },
                            {
                                loc: [480, 37],
                                async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['direction'] != 4))) { return { type: 'goto', destLabel: '$159_endif' }; } },
                            },
                                {
                                    loc: [480, 69],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(3); },
                                },
                            {
                                label: '$159_endif',
                            },
                            {
                                loc: [480, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$149_endif' }; },
                            },
                        {
                            loc: [481, 17],
                            label: '$149_elif7',
                        },
                        {
                            loc: [481, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === ((await (async () => {
                                ctx.tempVars['$160_0'] = ctx.runtime.roundHalfToEven(0);
                                const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$160_0']);
                                delete ctx.tempVars['$160_0'];
                                return result;
                            })()) + "M"))) { return { type: 'goto', destLabel: '$149_elif8' }; } },
                        },
                            {
                                loc: [481, 37],
                                async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['direction'] != 3))) { return { type: 'goto', destLabel: '$161_endif' }; } },
                            },
                                {
                                    loc: [481, 69],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['direction'] = ctx.runtime.roundHalfToEven(4); },
                                },
                            {
                                label: '$161_endif',
                            },
                            {
                                loc: [481, 17],
                                async run(ctx) { return { type: 'goto', destLabel: '$149_endif' }; },
                            },
                        {
                            loc: [482, 17],
                            label: '$149_elif8',
                        },
                        {
                            loc: [482, 17],
                            async run(ctx) { if (!(ctx.tempVars['$149_test'] === "p" || ctx.tempVars['$149_test'] === "P")) { return { type: 'goto', destLabel: '$149_endif' }; } },
                        },
                            {
                                loc: [482, 32],
                                async run(ctx) { (await (async () => {
                                    ctx.tempVars['$162_0'] = " Game Paused ... Push Space  ";
                                    const result = await ctx.executeProc(ctx, 'SpacePause', [ctx.tempVars, '$162_0']);
                                    delete ctx.tempVars['$162_0'];
                                    return result;
                                })()); },
                            },
                        {
                            label: '$149_endif',
                        },
                        {
                            loc: [473, 13],
                            async run(ctx) { delete ctx.tempVars['$149_test']; },
                        },
                        {
                            loc: [486, 13],
                            async run(ctx) { ctx.localVars['a'] = 1; ctx.tempVars['$163_step'] = 1; ctx.tempVars['$163_end'] = ctx.args['NumPlayers'][0][ctx.args['NumPlayers'][1]]; },
                        },
                        {
                            loc: [486, 13],
                            label: '$163_loopStart',
                        },
                            {
                                loc: [486, 13],
                                async run(ctx) { const counterValue = ctx.localVars['a']; if ((ctx.tempVars['$163_step'] >= 0 && counterValue > ctx.tempVars['$163_end']) || (ctx.tempVars['$163_step'] < 0 && counterValue < ctx.tempVars['$163_end'])) { return { type: 'goto', destLabel: '$163_loopEnd' }; } },
                            },
                            {
                                loc: [488, 17],
                                async run(ctx) { ctx.tempVars['$164_test'] = ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['direction']; },
                            },
                            {
                                loc: [489, 21],
                                async run(ctx) { if (!(ctx.tempVars['$164_test'] === 1)) { return { type: 'goto', destLabel: '$164_elif1' }; } },
                            },
                                {
                                    loc: [489, 29],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['row'] = ctx.runtime.roundHalfToEven((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['row'] - 1)); },
                                },
                                {
                                    loc: [489, 21],
                                    async run(ctx) { return { type: 'goto', destLabel: '$164_endif' }; },
                                },
                            {
                                loc: [490, 21],
                                label: '$164_elif1',
                            },
                            {
                                loc: [490, 21],
                                async run(ctx) { if (!(ctx.tempVars['$164_test'] === 2)) { return { type: 'goto', destLabel: '$164_elif2' }; } },
                            },
                                {
                                    loc: [490, 29],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['row'] = ctx.runtime.roundHalfToEven((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['row'] + 1)); },
                                },
                                {
                                    loc: [490, 21],
                                    async run(ctx) { return { type: 'goto', destLabel: '$164_endif' }; },
                                },
                            {
                                loc: [491, 21],
                                label: '$164_elif2',
                            },
                            {
                                loc: [491, 21],
                                async run(ctx) { if (!(ctx.tempVars['$164_test'] === 3)) { return { type: 'goto', destLabel: '$164_elif3' }; } },
                            },
                                {
                                    loc: [491, 29],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['col'] = ctx.runtime.roundHalfToEven((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['col'] - 1)); },
                                },
                                {
                                    loc: [491, 21],
                                    async run(ctx) { return { type: 'goto', destLabel: '$164_endif' }; },
                                },
                            {
                                loc: [492, 21],
                                label: '$164_elif3',
                            },
                            {
                                loc: [492, 21],
                                async run(ctx) { if (!(ctx.tempVars['$164_test'] === 4)) { return { type: 'goto', destLabel: '$164_endif' }; } },
                            },
                                {
                                    loc: [492, 29],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['col'] = ctx.runtime.roundHalfToEven((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['col'] + 1)); },
                                },
                            {
                                label: '$164_endif',
                            },
                            {
                                loc: [488, 17],
                                async run(ctx) { delete ctx.tempVars['$164_test']; },
                            },
                            {
                                loc: [496, 17],
                                async run(ctx) { if (!(((ctx.localVars['numberRow'] === (await (async () => {
                                    ctx.tempVars['$166_0'] = (((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['row'] + 1)) / 2);
                                    const result = await ctx.runtime.executeBuiltinProc('INT', [{"type":"single"}], [ctx.tempVars, '$166_0']);
                                    delete ctx.tempVars['$166_0'];
                                    return result;
                                })())) && (ctx.localVars['NumberCol'] === ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['col'])))) { return { type: 'goto', destLabel: '$165_endif' }; } },
                            },
                                {
                                    loc: [497, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$167_0'] = "MBO0L16>CCCE";
                                        const result = await ctx.runtime.executeBuiltinProc('PLAY', [{"type":"string"}], [ctx.tempVars, '$167_0']);
                                        delete ctx.tempVars['$167_0'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [498, 21],
                                    async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['length'] < ((ctx.globalVars['MAXSNAKELENGTH'] - 30))))) { return { type: 'goto', destLabel: '$168_endif' }; } },
                                },
                                    {
                                        loc: [499, 25],
                                        async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['length'] = ctx.runtime.roundHalfToEven((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['length'] + (ctx.localVars['number'] * 4))); },
                                    },
                                {
                                    label: '$168_endif',
                                },
                                {
                                    loc: [501, 21],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['score'] = (ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['score'] + ctx.localVars['number']); },
                                },
                                {
                                    loc: [502, 21],
                                    async run(ctx) { (await (async () => {
                                        const result = await ctx.executeProc(ctx, 'PrintScore', ctx.args['NumPlayers'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'lives'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'lives']);
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [503, 21],
                                    async run(ctx) { ctx.localVars['number'] = ctx.runtime.roundHalfToEven((ctx.localVars['number'] + 1)); },
                                },
                                {
                                    loc: [504, 21],
                                    async run(ctx) { if (!((ctx.localVars['number'] === 10))) { return { type: 'goto', destLabel: '$169_endif' }; } },
                                },
                                    {
                                        loc: [505, 25],
                                        async run(ctx) { (await (async () => {
                                            ctx.tempVars['$170_0'] = ctx.runtime.roundHalfToEven(1);
                                            const result = await ctx.executeProc(ctx, 'EraseSnake', [ctx.localVars, 'sammy'], [ctx.localVars, 'sammyBody'], [ctx.tempVars, '$170_0']);
                                            delete ctx.tempVars['$170_0'];
                                            return result;
                                        })()); },
                                    },
                                    {
                                        loc: [506, 25],
                                        async run(ctx) { (await (async () => {
                                            ctx.tempVars['$171_0'] = ctx.runtime.roundHalfToEven(2);
                                            const result = await ctx.executeProc(ctx, 'EraseSnake', [ctx.localVars, 'sammy'], [ctx.localVars, 'sammyBody'], [ctx.tempVars, '$171_0']);
                                            delete ctx.tempVars['$171_0'];
                                            return result;
                                        })()); },
                                    },
                                    {
                                        loc: [507, 25],
                                        async run(ctx) { (await (async () => {
                                            ctx.tempVars['$172_0'] = ctx.localVars['numberRow'];
                                            ctx.tempVars['$172_1'] = ctx.localVars['NumberCol'];
                                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$172_0'], [ctx.tempVars, '$172_1']);
                                            delete ctx.tempVars['$172_0'];
                                            delete ctx.tempVars['$172_1'];
                                            return result;
                                        })()); },
                                    },
                                    {
                                        loc: [507, 54],
                                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: " " }, ); },
                                    },
                                    {
                                        loc: [508, 25],
                                        async run(ctx) { (await (async () => {
                                            ctx.tempVars['$173_0'] = ctx.runtime.roundHalfToEven(ctx.globalVars['NEXTLEVEL']);
                                            const result = await ctx.executeProc(ctx, 'Level', [ctx.tempVars, '$173_0'], [ctx.localVars, 'sammy']);
                                            delete ctx.tempVars['$173_0'];
                                            return result;
                                        })()); },
                                    },
                                    {
                                        loc: [509, 25],
                                        async run(ctx) { (await (async () => {
                                            const result = await ctx.executeProc(ctx, 'PrintScore', ctx.args['NumPlayers'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'lives'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'lives']);
                                            return result;
                                        })()); },
                                    },
                                    {
                                        loc: [510, 25],
                                        async run(ctx) { (await (async () => {
                                            ctx.tempVars['$174_0'] = (("     Level" + (await (async () => {
                                                ctx.tempVars['$175_0'] = ctx.globalVars['curLevel'];
                                                const result = await ctx.runtime.executeBuiltinProc('STR$', [{"type":"integer"}], [ctx.tempVars, '$175_0']);
                                                delete ctx.tempVars['$175_0'];
                                                return result;
                                            })())) + ",  Push Space");
                                            const result = await ctx.executeProc(ctx, 'SpacePause', [ctx.tempVars, '$174_0']);
                                            delete ctx.tempVars['$174_0'];
                                            return result;
                                        })()); },
                                    },
                                    {
                                        loc: [511, 25],
                                        async run(ctx) { if (!((ctx.args['NumPlayers'][0][ctx.args['NumPlayers'][1]] === 1))) { return { type: 'goto', destLabel: '$176_endif' }; } },
                                    },
                                        {
                                            loc: [511, 48],
                                            async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['row'] = ctx.runtime.roundHalfToEven(0); },
                                        },
                                    {
                                        label: '$176_endif',
                                    },
                                    {
                                        loc: [512, 25],
                                        async run(ctx) { ctx.localVars['number'] = ctx.runtime.roundHalfToEven(1); },
                                    },
                                    {
                                        loc: [513, 25],
                                        async run(ctx) { if (!((ctx.args['diff$'][0][ctx.args['diff$'][1]] === "P"))) { return { type: 'goto', destLabel: '$177_endif' }; } },
                                    },
                                        {
                                            loc: [513, 45],
                                            async run(ctx) { ctx.args['speed'][0][ctx.args['speed'][1]] = ctx.runtime.roundHalfToEven((ctx.args['speed'][0][ctx.args['speed'][1]] - 10)); },
                                        },
                                        {
                                            loc: [513, 65],
                                            async run(ctx) { ctx.localVars['curSpeed'] = ctx.args['speed'][0][ctx.args['speed'][1]]; },
                                        },
                                    {
                                        label: '$177_endif',
                                    },
                                {
                                    label: '$169_endif',
                                },
                                {
                                    loc: [515, 21],
                                    async run(ctx) { ctx.localVars['nonum'] = ctx.runtime.roundHalfToEven(ctx.globalVars['TRUE']); },
                                },
                                {
                                    loc: [516, 21],
                                    async run(ctx) { if (!((ctx.localVars['curSpeed'] < 1))) { return { type: 'goto', destLabel: '$178_endif' }; } },
                                },
                                    {
                                        loc: [516, 42],
                                        async run(ctx) { ctx.localVars['curSpeed'] = ctx.runtime.roundHalfToEven(1); },
                                    },
                                {
                                    label: '$178_endif',
                                },
                            {
                                label: '$165_endif',
                            },
                            {
                                loc: [518, 13],
                                async run(ctx) { ctx.localVars['a'] += ctx.tempVars['$163_step']; return { type: 'goto', destLabel: '$163_loopStart' }; },
                            },
                        {
                            loc: [486, 13],
                            label: '$163_loopEnd',
                        },
                        {
                            loc: [486, 13],
                            async run(ctx) { delete ctx.tempVars['$163_step']; delete ctx.tempVars['$163_end']; },
                        },
                        {
                            loc: [520, 13],
                            async run(ctx) { ctx.localVars['a'] = 1; ctx.tempVars['$179_step'] = 1; ctx.tempVars['$179_end'] = ctx.args['NumPlayers'][0][ctx.args['NumPlayers'][1]]; },
                        },
                        {
                            loc: [520, 13],
                            label: '$179_loopStart',
                        },
                            {
                                loc: [520, 13],
                                async run(ctx) { const counterValue = ctx.localVars['a']; if ((ctx.tempVars['$179_step'] >= 0 && counterValue > ctx.tempVars['$179_end']) || (ctx.tempVars['$179_step'] < 0 && counterValue < ctx.tempVars['$179_end'])) { return { type: 'goto', destLabel: '$179_loopEnd' }; } },
                            },
                            {
                                loc: [522, 17],
                                async run(ctx) { if (!(((await (async () => {
                                    const result = await ctx.executeProc(ctx, 'PointIsThere', [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values, 'row'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values, 'col'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 4)]);
                                    return result;
                                })()) || (((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['row'] === ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['row']) && (ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['col'] === ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['col'])))))) { return { type: 'goto', destLabel: '$180_else' }; } },
                            },
                                {
                                    loc: [523, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$181_0'] = "MBO0L32EFGEFDC";
                                        const result = await ctx.runtime.executeBuiltinProc('PLAY', [{"type":"string"}], [ctx.tempVars, '$181_0']);
                                        delete ctx.tempVars['$181_0'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [524, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$182_0'] = ctx.runtime.roundHalfToEven(NaN);
                                        ctx.tempVars['$182_1'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 4)];
                                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"integer"}], [ctx.tempVars, '$182_0'], [ctx.tempVars, '$182_1']);
                                        delete ctx.tempVars['$182_0'];
                                        delete ctx.tempVars['$182_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [525, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$183_0'] = ctx.localVars['numberRow'];
                                        ctx.tempVars['$183_1'] = ctx.localVars['NumberCol'];
                                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$183_0'], [ctx.tempVars, '$183_1']);
                                        delete ctx.tempVars['$183_0'];
                                        delete ctx.tempVars['$183_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [526, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: " " }, ); },
                                },
                                {
                                    loc: [528, 21],
                                    async run(ctx) { ctx.localVars['playerDied'] = ctx.runtime.roundHalfToEven(ctx.globalVars['TRUE']); },
                                },
                                {
                                    loc: [529, 21],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['alive'] = ctx.globalVars['FALSE']; },
                                },
                                {
                                    loc: [530, 21],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['lives'] = ctx.runtime.roundHalfToEven((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['lives'] - 1)); },
                                },
                                {
                                    loc: [522, 17],
                                    async run(ctx) { return { type: 'goto', destLabel: '$180_endif' }; },
                                },
                            {
                                loc: [533, 17],
                                label: '$180_else',
                            },
                                {
                                    loc: [534, 21],
                                    async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['head'] = ctx.runtime.roundHalfToEven((((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['head'] + 1)) % ctx.globalVars['MAXSNAKELENGTH'])); },
                                },
                                {
                                    loc: [535, 21],
                                    async run(ctx) { ctx.localVars['sammyBody'].values[ctx.localVars['sammyBody'].getIdx(0, ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['head'])][ctx.localVars['sammyBody'].getIdx(1, ctx.localVars['a'])].values['row'] = ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['row']; },
                                },
                                {
                                    loc: [536, 21],
                                    async run(ctx) { ctx.localVars['sammyBody'].values[ctx.localVars['sammyBody'].getIdx(0, ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['head'])][ctx.localVars['sammyBody'].getIdx(1, ctx.localVars['a'])].values['col'] = ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['col']; },
                                },
                                {
                                    loc: [537, 21],
                                    async run(ctx) { ctx.localVars['tail'] = ctx.runtime.roundHalfToEven(((((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['head'] + ctx.globalVars['MAXSNAKELENGTH']) - ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['length'])) % ctx.globalVars['MAXSNAKELENGTH'])); },
                                },
                                {
                                    loc: [538, 21],
                                    async run(ctx) { (await (async () => {
                                        const result = await ctx.executeProc(ctx, 'Set', [ctx.localVars['sammyBody'].values[ctx.localVars['sammyBody'].getIdx(0, ctx.localVars['tail'])][ctx.localVars['sammyBody'].getIdx(1, ctx.localVars['a'])].values, 'row'], [ctx.localVars['sammyBody'].values[ctx.localVars['sammyBody'].getIdx(0, ctx.localVars['tail'])][ctx.localVars['sammyBody'].getIdx(1, ctx.localVars['a'])].values, 'col'], [ctx.globalVars['colorTable'].values, ctx.globalVars['colorTable'].getIdx(0, 4)]);
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [539, 21],
                                    async run(ctx) { ctx.localVars['sammyBody'].values[ctx.localVars['sammyBody'].getIdx(0, ctx.localVars['tail'])][ctx.localVars['sammyBody'].getIdx(1, ctx.localVars['a'])].values['row'] = ctx.runtime.roundHalfToEven(0); },
                                },
                                {
                                    loc: [540, 21],
                                    async run(ctx) { (await (async () => {
                                        const result = await ctx.executeProc(ctx, 'Set', [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values, 'row'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values, 'col'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values, 'scolor']);
                                        return result;
                                    })()); },
                                },
                            {
                                label: '$180_endif',
                            },
                            {
                                loc: [542, 13],
                                async run(ctx) { ctx.localVars['a'] += ctx.tempVars['$179_step']; return { type: 'goto', destLabel: '$179_loopStart' }; },
                            },
                        {
                            loc: [520, 13],
                            label: '$179_loopEnd',
                        },
                        {
                            loc: [520, 13],
                            async run(ctx) { delete ctx.tempVars['$179_step']; delete ctx.tempVars['$179_end']; },
                        },
                    {
                        loc: [452, 9],
                        async run(ctx) { if (ctx.localVars['playerDied']) { return { type: 'goto', destLabel: '$137_loopEnd' }; } },
                    },
                    {
                        loc: [452, 9],
                        async run(ctx) { return { type: 'goto', destLabel: '$137_loopStart' }; },
                    },
                    {
                        loc: [452, 9],
                        label: '$137_loopEnd',
                    },
                    {
                        loc: [546, 9],
                        async run(ctx) { ctx.localVars['curSpeed'] = ctx.args['speed'][0][ctx.args['speed'][1]]; },
                    },
                    {
                        loc: [548, 9],
                        async run(ctx) { ctx.localVars['a'] = 1; ctx.tempVars['$184_step'] = 1; ctx.tempVars['$184_end'] = ctx.args['NumPlayers'][0][ctx.args['NumPlayers'][1]]; },
                    },
                    {
                        loc: [548, 9],
                        label: '$184_loopStart',
                    },
                        {
                            loc: [548, 9],
                            async run(ctx) { const counterValue = ctx.localVars['a']; if ((ctx.tempVars['$184_step'] >= 0 && counterValue > ctx.tempVars['$184_end']) || (ctx.tempVars['$184_step'] < 0 && counterValue < ctx.tempVars['$184_end'])) { return { type: 'goto', destLabel: '$184_loopEnd' }; } },
                        },
                        {
                            loc: [549, 13],
                            async run(ctx) { (await (async () => {
                                const result = await ctx.executeProc(ctx, 'EraseSnake', [ctx.localVars, 'sammy'], [ctx.localVars, 'sammyBody'], [ctx.localVars, 'a']);
                                return result;
                            })()); },
                        },
                        {
                            loc: [552, 13],
                            async run(ctx) { if (!((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['alive'] === ctx.globalVars['FALSE']))) { return { type: 'goto', destLabel: '$185_endif' }; } },
                        },
                            {
                                loc: [554, 17],
                                async run(ctx) { ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['score'] = ctx.runtime.roundHalfToEven((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, ctx.localVars['a'])].values['score'] - 10)); },
                            },
                            {
                                loc: [555, 17],
                                async run(ctx) { (await (async () => {
                                    const result = await ctx.executeProc(ctx, 'PrintScore', ctx.args['NumPlayers'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'lives'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'lives']);
                                    return result;
                                })()); },
                            },
                            {
                                loc: [557, 17],
                                async run(ctx) { if (!((ctx.localVars['a'] === 1))) { return { type: 'goto', destLabel: '$186_else' }; } },
                            },
                                {
                                    loc: [558, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$187_0'] = " Sammy Dies! Push Space! --->";
                                        const result = await ctx.executeProc(ctx, 'SpacePause', [ctx.tempVars, '$187_0']);
                                        delete ctx.tempVars['$187_0'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [557, 17],
                                    async run(ctx) { return { type: 'goto', destLabel: '$186_endif' }; },
                                },
                            {
                                loc: [559, 17],
                                label: '$186_else',
                            },
                                {
                                    loc: [560, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$188_0'] = " <---- Jake Dies! Push Space ";
                                        const result = await ctx.executeProc(ctx, 'SpacePause', [ctx.tempVars, '$188_0']);
                                        delete ctx.tempVars['$188_0'];
                                        return result;
                                    })()); },
                                },
                            {
                                label: '$186_endif',
                            },
                        {
                            label: '$185_endif',
                        },
                        {
                            loc: [563, 9],
                            async run(ctx) { ctx.localVars['a'] += ctx.tempVars['$184_step']; return { type: 'goto', destLabel: '$184_loopStart' }; },
                        },
                    {
                        loc: [548, 9],
                        label: '$184_loopEnd',
                    },
                    {
                        loc: [548, 9],
                        async run(ctx) { delete ctx.tempVars['$184_step']; delete ctx.tempVars['$184_end']; },
                    },
                    {
                        loc: [565, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$189_0'] = ctx.runtime.roundHalfToEven(ctx.globalVars['SAMELEVEL']);
                            const result = await ctx.executeProc(ctx, 'Level', [ctx.tempVars, '$189_0'], [ctx.localVars, 'sammy']);
                            delete ctx.tempVars['$189_0'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [566, 9],
                        async run(ctx) { (await (async () => {
                            const result = await ctx.executeProc(ctx, 'PrintScore', ctx.args['NumPlayers'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'score'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values, 'lives'], [ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values, 'lives']);
                            return result;
                        })()); },
                    },
                {
                    loc: [440, 5],
                    async run(ctx) { if (((ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 1)].values['lives'] === 0) || (ctx.localVars['sammy'].values[ctx.localVars['sammy'].getIdx(0, 2)].values['lives'] === 0))) { return { type: 'goto', destLabel: '$134_loopEnd' }; } },
                },
                {
                    loc: [440, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$134_loopStart' }; },
                },
                {
                    loc: [440, 5],
                    label: '$134_loopEnd',
                },
            ],
        },
        {
            loc: [575, 1],
            type: 'fn',
            name: 'PointIsThere',
            localSymbols: [{"name":"PointIsThere","varType":"var","typeSpec":{"type":"integer"},"varScope":"local"}],
            paramSymbols: [{"name":"row","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"col","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"acolor","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"}],
            stmts: [
                {
                    loc: [576, 5],
                    async run(ctx) { if (!((ctx.args['row'][0][ctx.args['row'][1]] != 0))) { return { type: 'goto', destLabel: '$190_endif' }; } },
                },
                    {
                        loc: [577, 9],
                        async run(ctx) { if (!((ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.args['row'][0][ctx.args['row'][1]])][ctx.globalVars['arena'].getIdx(1, ctx.args['col'][0][ctx.args['col'][1]])].values['acolor'] != ctx.args['acolor'][0][ctx.args['acolor'][1]]))) { return { type: 'goto', destLabel: '$191_else' }; } },
                    },
                        {
                            loc: [578, 13],
                            async run(ctx) { ctx.localVars['PointIsThere'] = ctx.runtime.roundHalfToEven(ctx.globalVars['TRUE']); },
                        },
                        {
                            loc: [577, 9],
                            async run(ctx) { return { type: 'goto', destLabel: '$191_endif' }; },
                        },
                    {
                        loc: [579, 9],
                        label: '$191_else',
                    },
                        {
                            loc: [580, 13],
                            async run(ctx) { ctx.localVars['PointIsThere'] = ctx.globalVars['FALSE']; },
                        },
                    {
                        label: '$191_endif',
                    },
                {
                    label: '$190_endif',
                },
            ],
        },
        {
            loc: [587, 1],
            type: 'sub',
            name: 'PrintScore',
            localSymbols: [],
            paramSymbols: [{"name":"NumPlayers","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"score1","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"score2","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"lives1","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"lives2","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"}],
            stmts: [
                {
                    loc: [588, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$192_0'] = ctx.runtime.roundHalfToEven(15);
                        ctx.tempVars['$192_1'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 4)];
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"integer"}], [ctx.tempVars, '$192_0'], [ctx.tempVars, '$192_1']);
                        delete ctx.tempVars['$192_0'];
                        delete ctx.tempVars['$192_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [590, 5],
                    async run(ctx) { if (!((ctx.args['NumPlayers'][0][ctx.args['NumPlayers'][1]] === 2))) { return { type: 'goto', destLabel: '$193_endif' }; } },
                },
                    {
                        loc: [591, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$194_0'] = ctx.runtime.roundHalfToEven(1);
                            ctx.tempVars['$194_1'] = ctx.runtime.roundHalfToEven(1);
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$194_0'], [ctx.tempVars, '$194_1']);
                            delete ctx.tempVars['$194_0'];
                            delete ctx.tempVars['$194_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [592, 9],
                        async run(ctx) { await ctx.runtime.print("#,###,#00  Lives: #  <--JAKE", { type: 'value', value: ctx.args['score2'][0][ctx.args['score2'][1]] }, { type: 'semicolon' }, { type: 'value', value: ctx.args['lives2'][0][ctx.args['lives2'][1]] }, ); },
                    },
                {
                    label: '$193_endif',
                },
                {
                    loc: [595, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$195_0'] = ctx.runtime.roundHalfToEven(1);
                        ctx.tempVars['$195_1'] = ctx.runtime.roundHalfToEven(49);
                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$195_0'], [ctx.tempVars, '$195_1']);
                        delete ctx.tempVars['$195_0'];
                        delete ctx.tempVars['$195_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [596, 5],
                    async run(ctx) { await ctx.runtime.print("SAMMY-->  Lives: #     #,###,#00", { type: 'value', value: ctx.args['lives1'][0][ctx.args['lives1'][1]] }, { type: 'semicolon' }, { type: 'value', value: ctx.args['score1'][0][ctx.args['score1'][1]] }, ); },
                },
            ],
        },
        {
            loc: [602, 1],
            type: 'sub',
            name: 'Set',
            localSymbols: [{"name":"realRow","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"topFlag","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"sisterRow","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"sisterColor","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"}],
            paramSymbols: [{"name":"row","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"col","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"acolor","varType":"arg","typeSpec":{"type":"integer"},"varScope":"local"}],
            stmts: [
                {
                    loc: [603, 5],
                    async run(ctx) { if (!((ctx.args['row'][0][ctx.args['row'][1]] != 0))) { return { type: 'goto', destLabel: '$196_endif' }; } },
                },
                    {
                        loc: [604, 9],
                        async run(ctx) { ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.args['row'][0][ctx.args['row'][1]])][ctx.globalVars['arena'].getIdx(1, ctx.args['col'][0][ctx.args['col'][1]])].values['acolor'] = ctx.args['acolor'][0][ctx.args['acolor'][1]]; },
                    },
                    {
                        loc: [605, 9],
                        async run(ctx) { ctx.localVars['realRow'] = ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.args['row'][0][ctx.args['row'][1]])][ctx.globalVars['arena'].getIdx(1, ctx.args['col'][0][ctx.args['col'][1]])].values['realRow']; },
                    },
                    {
                        loc: [606, 9],
                        async run(ctx) { ctx.localVars['topFlag'] = ctx.runtime.roundHalfToEven((ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.args['row'][0][ctx.args['row'][1]])][ctx.globalVars['arena'].getIdx(1, ctx.args['col'][0][ctx.args['col'][1]])].values['sister'] + (1 / 2))); },
                    },
                    {
                        loc: [608, 9],
                        async run(ctx) { ctx.localVars['sisterRow'] = (ctx.args['row'][0][ctx.args['row'][1]] + ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.args['row'][0][ctx.args['row'][1]])][ctx.globalVars['arena'].getIdx(1, ctx.args['col'][0][ctx.args['col'][1]])].values['sister']); },
                    },
                    {
                        loc: [609, 9],
                        async run(ctx) { ctx.localVars['sisterColor'] = ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.localVars['sisterRow'])][ctx.globalVars['arena'].getIdx(1, ctx.args['col'][0][ctx.args['col'][1]])].values['acolor']; },
                    },
                    {
                        loc: [611, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$197_0'] = ctx.localVars['realRow'];
                            ctx.tempVars['$197_1'] = ctx.args['col'][0][ctx.args['col'][1]];
                            const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$197_0'], [ctx.tempVars, '$197_1']);
                            delete ctx.tempVars['$197_0'];
                            delete ctx.tempVars['$197_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [613, 9],
                        async run(ctx) { if (!((ctx.args['acolor'][0][ctx.args['acolor'][1]] === ctx.localVars['sisterColor']))) { return { type: 'goto', destLabel: '$198_else' }; } },
                    },
                        {
                            loc: [614, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$199_0'] = ctx.args['acolor'][0][ctx.args['acolor'][1]];
                                ctx.tempVars['$199_1'] = ctx.args['acolor'][0][ctx.args['acolor'][1]];
                                const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$199_0'], [ctx.tempVars, '$199_1']);
                                delete ctx.tempVars['$199_0'];
                                delete ctx.tempVars['$199_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [615, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                                ctx.tempVars['$200_0'] = ctx.runtime.roundHalfToEven(219);
                                const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$200_0']);
                                delete ctx.tempVars['$200_0'];
                                return result;
                            })()) }, { type: 'semicolon' }, ); },
                        },
                        {
                            loc: [613, 9],
                            async run(ctx) { return { type: 'goto', destLabel: '$198_endif' }; },
                        },
                    {
                        loc: [616, 9],
                        label: '$198_else',
                    },
                        {
                            loc: [617, 13],
                            async run(ctx) { if (!(ctx.localVars['topFlag'])) { return { type: 'goto', destLabel: '$201_else' }; } },
                        },
                            {
                                loc: [618, 17],
                                async run(ctx) { if (!((ctx.args['acolor'][0][ctx.args['acolor'][1]] > 7))) { return { type: 'goto', destLabel: '$202_else' }; } },
                            },
                                {
                                    loc: [619, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$203_0'] = ctx.args['acolor'][0][ctx.args['acolor'][1]];
                                        ctx.tempVars['$203_1'] = ctx.localVars['sisterColor'];
                                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$203_0'], [ctx.tempVars, '$203_1']);
                                        delete ctx.tempVars['$203_0'];
                                        delete ctx.tempVars['$203_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [620, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                                        ctx.tempVars['$204_0'] = ctx.runtime.roundHalfToEven(223);
                                        const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$204_0']);
                                        delete ctx.tempVars['$204_0'];
                                        return result;
                                    })()) }, { type: 'semicolon' }, ); },
                                },
                                {
                                    loc: [618, 17],
                                    async run(ctx) { return { type: 'goto', destLabel: '$202_endif' }; },
                                },
                            {
                                loc: [621, 17],
                                label: '$202_else',
                            },
                                {
                                    loc: [622, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$205_0'] = ctx.localVars['sisterColor'];
                                        ctx.tempVars['$205_1'] = ctx.args['acolor'][0][ctx.args['acolor'][1]];
                                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$205_0'], [ctx.tempVars, '$205_1']);
                                        delete ctx.tempVars['$205_0'];
                                        delete ctx.tempVars['$205_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [623, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                                        ctx.tempVars['$206_0'] = ctx.runtime.roundHalfToEven(220);
                                        const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$206_0']);
                                        delete ctx.tempVars['$206_0'];
                                        return result;
                                    })()) }, { type: 'semicolon' }, ); },
                                },
                            {
                                label: '$202_endif',
                            },
                            {
                                loc: [617, 13],
                                async run(ctx) { return { type: 'goto', destLabel: '$201_endif' }; },
                            },
                        {
                            loc: [625, 13],
                            label: '$201_else',
                        },
                            {
                                loc: [626, 17],
                                async run(ctx) { if (!((ctx.args['acolor'][0][ctx.args['acolor'][1]] > 7))) { return { type: 'goto', destLabel: '$207_else' }; } },
                            },
                                {
                                    loc: [627, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$208_0'] = ctx.args['acolor'][0][ctx.args['acolor'][1]];
                                        ctx.tempVars['$208_1'] = ctx.localVars['sisterColor'];
                                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$208_0'], [ctx.tempVars, '$208_1']);
                                        delete ctx.tempVars['$208_0'];
                                        delete ctx.tempVars['$208_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [628, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                                        ctx.tempVars['$209_0'] = ctx.runtime.roundHalfToEven(220);
                                        const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$209_0']);
                                        delete ctx.tempVars['$209_0'];
                                        return result;
                                    })()) }, { type: 'semicolon' }, ); },
                                },
                                {
                                    loc: [626, 17],
                                    async run(ctx) { return { type: 'goto', destLabel: '$207_endif' }; },
                                },
                            {
                                loc: [629, 17],
                                label: '$207_else',
                            },
                                {
                                    loc: [630, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$210_0'] = ctx.localVars['sisterColor'];
                                        ctx.tempVars['$210_1'] = ctx.args['acolor'][0][ctx.args['acolor'][1]];
                                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$210_0'], [ctx.tempVars, '$210_1']);
                                        delete ctx.tempVars['$210_0'];
                                        delete ctx.tempVars['$210_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [631, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                                        ctx.tempVars['$211_0'] = ctx.runtime.roundHalfToEven(223);
                                        const result = await ctx.runtime.executeBuiltinProc('CHR$', [{"type":"single"}], [ctx.tempVars, '$211_0']);
                                        delete ctx.tempVars['$211_0'];
                                        return result;
                                    })()) }, { type: 'semicolon' }, ); },
                                },
                            {
                                label: '$207_endif',
                            },
                        {
                            label: '$201_endif',
                        },
                    {
                        label: '$198_endif',
                    },
                {
                    label: '$196_endif',
                },
            ],
        },
        {
            loc: [640, 1],
            type: 'sub',
            name: 'SpacePause',
            localSymbols: [{"name":"i","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"j","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"}],
            paramSymbols: [{"name":"text$","varType":"arg","typeSpec":{"type":"string"},"varScope":"local"}],
            stmts: [
                {
                    loc: [642, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$212_0'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 5)];
                        ctx.tempVars['$212_1'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 6)];
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$212_0'], [ctx.tempVars, '$212_1']);
                        delete ctx.tempVars['$212_0'];
                        delete ctx.tempVars['$212_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [643, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$213_0'] = ctx.runtime.roundHalfToEven(11);
                        ctx.tempVars['$213_1'] = "█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$213_0'], [ctx.tempVars, '$213_1']);
                        delete ctx.tempVars['$213_0'];
                        delete ctx.tempVars['$213_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [644, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$214_0'] = ctx.runtime.roundHalfToEven(12);
                        ctx.tempVars['$214_1'] = (("█ " + (await (async () => {
                            ctx.tempVars['$215_0'] = (ctx.args['text$'][0][ctx.args['text$'][1]] + (await (async () => {
                                ctx.tempVars['$216_0'] = ctx.runtime.roundHalfToEven(29);
                                const result = await ctx.runtime.executeBuiltinProc('SPACE$', [{"type":"single"}], [ctx.tempVars, '$216_0']);
                                delete ctx.tempVars['$216_0'];
                                return result;
                            })()));
                            ctx.tempVars['$215_1'] = ctx.runtime.roundHalfToEven(29);
                            const result = await ctx.runtime.executeBuiltinProc('LEFT$', [{"type":"string"},{"type":"single"}], [ctx.tempVars, '$215_0'], [ctx.tempVars, '$215_1']);
                            delete ctx.tempVars['$215_0'];
                            delete ctx.tempVars['$215_1'];
                            return result;
                        })())) + " █");
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$214_0'], [ctx.tempVars, '$214_1']);
                        delete ctx.tempVars['$214_0'];
                        delete ctx.tempVars['$214_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [645, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$217_0'] = ctx.runtime.roundHalfToEven(13);
                        ctx.tempVars['$217_1'] = "█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$217_0'], [ctx.tempVars, '$217_1']);
                        delete ctx.tempVars['$217_0'];
                        delete ctx.tempVars['$217_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [646, 5],
                    label: '$218_loopStart',
                },
                {
                    loc: [646, 5],
                    async run(ctx) { if (!(((await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                    return result;
                })()) != ""))) { return { type: 'goto', destLabel: '$218_loopEnd' }; } },
                },
                {
                    loc: [646, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$218_loopStart' }; },
                },
                {
                    loc: [646, 5],
                    label: '$218_loopEnd',
                },
                {
                    loc: [647, 5],
                    label: '$219_loopStart',
                },
                {
                    loc: [647, 5],
                    async run(ctx) { if (!(((await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                    return result;
                })()) != " "))) { return { type: 'goto', destLabel: '$219_loopEnd' }; } },
                },
                {
                    loc: [647, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$219_loopStart' }; },
                },
                {
                    loc: [647, 5],
                    label: '$219_loopEnd',
                },
                {
                    loc: [648, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$220_0'] = ctx.runtime.roundHalfToEven(15);
                        ctx.tempVars['$220_1'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 4)];
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"integer"}], [ctx.tempVars, '$220_0'], [ctx.tempVars, '$220_1']);
                        delete ctx.tempVars['$220_0'];
                        delete ctx.tempVars['$220_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [650, 5],
                    async run(ctx) { ctx.localVars['i'] = 21; ctx.tempVars['$221_step'] = 1; ctx.tempVars['$221_end'] = 26; },
                },
                {
                    loc: [650, 5],
                    label: '$221_loopStart',
                },
                    {
                        loc: [650, 5],
                        async run(ctx) { const counterValue = ctx.localVars['i']; if ((ctx.tempVars['$221_step'] >= 0 && counterValue > ctx.tempVars['$221_end']) || (ctx.tempVars['$221_step'] < 0 && counterValue < ctx.tempVars['$221_end'])) { return { type: 'goto', destLabel: '$221_loopEnd' }; } },
                    },
                    {
                        loc: [651, 9],
                        async run(ctx) { ctx.localVars['j'] = 24; ctx.tempVars['$222_step'] = 1; ctx.tempVars['$222_end'] = 56; },
                    },
                    {
                        loc: [651, 9],
                        label: '$222_loopStart',
                    },
                        {
                            loc: [651, 9],
                            async run(ctx) { const counterValue = ctx.localVars['j']; if ((ctx.tempVars['$222_step'] >= 0 && counterValue > ctx.tempVars['$222_end']) || (ctx.tempVars['$222_step'] < 0 && counterValue < ctx.tempVars['$222_end'])) { return { type: 'goto', destLabel: '$222_loopEnd' }; } },
                        },
                        {
                            loc: [652, 13],
                            async run(ctx) { (await (async () => {
                                const result = await ctx.executeProc(ctx, 'Set', [ctx.localVars, 'i'], [ctx.localVars, 'j'], [ctx.globalVars['arena'].values[ctx.globalVars['arena'].getIdx(0, ctx.localVars['i'])][ctx.globalVars['arena'].getIdx(1, ctx.localVars['j'])].values, 'acolor']);
                                return result;
                            })()); },
                        },
                        {
                            loc: [653, 9],
                            async run(ctx) { ctx.localVars['j'] += ctx.tempVars['$222_step']; return { type: 'goto', destLabel: '$222_loopStart' }; },
                        },
                    {
                        loc: [651, 9],
                        label: '$222_loopEnd',
                    },
                    {
                        loc: [651, 9],
                        async run(ctx) { delete ctx.tempVars['$222_step']; delete ctx.tempVars['$222_end']; },
                    },
                    {
                        loc: [654, 5],
                        async run(ctx) { ctx.localVars['i'] += ctx.tempVars['$221_step']; return { type: 'goto', destLabel: '$221_loopStart' }; },
                    },
                {
                    loc: [650, 5],
                    label: '$221_loopEnd',
                },
                {
                    loc: [650, 5],
                    async run(ctx) { delete ctx.tempVars['$221_step']; delete ctx.tempVars['$221_end']; },
                },
            ],
        },
        {
            loc: [660, 1],
            type: 'sub',
            name: 'SparklePause',
            localSymbols: [{"name":"a$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"a","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"b","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"},{"name":"c","typeSpec":{"type":"integer"},"varType":"var","varScope":"local"}],
            paramSymbols: [],
            stmts: [
                {
                    loc: [662, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$223_0'] = ctx.runtime.roundHalfToEven(4);
                        ctx.tempVars['$223_1'] = ctx.runtime.roundHalfToEven(0);
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$223_0'], [ctx.tempVars, '$223_1']);
                        delete ctx.tempVars['$223_0'];
                        delete ctx.tempVars['$223_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [663, 5],
                    async run(ctx) { ctx.localVars['a$'] = "*    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    "; },
                },
                {
                    loc: [664, 5],
                    label: '$224_loopStart',
                },
                {
                    loc: [664, 5],
                    async run(ctx) { if (!(((await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                    return result;
                })()) != ""))) { return { type: 'goto', destLabel: '$224_loopEnd' }; } },
                },
                {
                    loc: [664, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$224_loopStart' }; },
                },
                {
                    loc: [664, 5],
                    label: '$224_loopEnd',
                },
                {
                    loc: [666, 5],
                    label: '$225_loopStart',
                },
                {
                    loc: [666, 5],
                    async run(ctx) { if (!(((await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                    return result;
                })()) === ""))) { return { type: 'goto', destLabel: '$225_loopEnd' }; } },
                },
                    {
                        loc: [667, 9],
                        async run(ctx) { ctx.localVars['a'] = 1; ctx.tempVars['$226_step'] = 1; ctx.tempVars['$226_end'] = 5; },
                    },
                    {
                        loc: [667, 9],
                        label: '$226_loopStart',
                    },
                        {
                            loc: [667, 9],
                            async run(ctx) { const counterValue = ctx.localVars['a']; if ((ctx.tempVars['$226_step'] >= 0 && counterValue > ctx.tempVars['$226_end']) || (ctx.tempVars['$226_step'] < 0 && counterValue < ctx.tempVars['$226_end'])) { return { type: 'goto', destLabel: '$226_loopEnd' }; } },
                        },
                        {
                            loc: [668, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$227_0'] = ctx.runtime.roundHalfToEven(1);
                                ctx.tempVars['$227_1'] = ctx.runtime.roundHalfToEven(1);
                                const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$227_0'], [ctx.tempVars, '$227_1']);
                                delete ctx.tempVars['$227_0'];
                                delete ctx.tempVars['$227_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [669, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                                ctx.tempVars['$228_0'] = ctx.localVars['a$'];
                                ctx.tempVars['$228_1'] = ctx.localVars['a'];
                                ctx.tempVars['$228_2'] = ctx.runtime.roundHalfToEven(80);
                                const result = await ctx.runtime.executeBuiltinProc('MID$', [{"type":"string"},{"type":"integer"},{"type":"single"}], [ctx.tempVars, '$228_0'], [ctx.tempVars, '$228_1'], [ctx.tempVars, '$228_2']);
                                delete ctx.tempVars['$228_0'];
                                delete ctx.tempVars['$228_1'];
                                delete ctx.tempVars['$228_2'];
                                return result;
                            })()) }, { type: 'semicolon' }, ); },
                        },
                        {
                            loc: [670, 13],
                            async run(ctx) { (await (async () => {
                                ctx.tempVars['$229_0'] = ctx.runtime.roundHalfToEven(22);
                                ctx.tempVars['$229_1'] = ctx.runtime.roundHalfToEven(1);
                                const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$229_0'], [ctx.tempVars, '$229_1']);
                                delete ctx.tempVars['$229_0'];
                                delete ctx.tempVars['$229_1'];
                                return result;
                            })()); },
                        },
                        {
                            loc: [671, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: (await (async () => {
                                ctx.tempVars['$230_0'] = ctx.localVars['a$'];
                                ctx.tempVars['$230_1'] = ctx.runtime.roundHalfToEven((6 - ctx.localVars['a']));
                                ctx.tempVars['$230_2'] = ctx.runtime.roundHalfToEven(80);
                                const result = await ctx.runtime.executeBuiltinProc('MID$', [{"type":"string"},{"type":"single"},{"type":"single"}], [ctx.tempVars, '$230_0'], [ctx.tempVars, '$230_1'], [ctx.tempVars, '$230_2']);
                                delete ctx.tempVars['$230_0'];
                                delete ctx.tempVars['$230_1'];
                                delete ctx.tempVars['$230_2'];
                                return result;
                            })()) }, { type: 'semicolon' }, ); },
                        },
                        {
                            loc: [673, 13],
                            async run(ctx) { ctx.localVars['b'] = 2; ctx.tempVars['$231_step'] = 1; ctx.tempVars['$231_end'] = 21; },
                        },
                        {
                            loc: [673, 13],
                            label: '$231_loopStart',
                        },
                            {
                                loc: [673, 13],
                                async run(ctx) { const counterValue = ctx.localVars['b']; if ((ctx.tempVars['$231_step'] >= 0 && counterValue > ctx.tempVars['$231_end']) || (ctx.tempVars['$231_step'] < 0 && counterValue < ctx.tempVars['$231_end'])) { return { type: 'goto', destLabel: '$231_loopEnd' }; } },
                            },
                            {
                                loc: [674, 17],
                                async run(ctx) { ctx.localVars['c'] = ctx.runtime.roundHalfToEven((((ctx.localVars['a'] + ctx.localVars['b'])) % 5)); },
                            },
                            {
                                loc: [675, 17],
                                async run(ctx) { if (!((ctx.localVars['c'] === 1))) { return { type: 'goto', destLabel: '$232_else' }; } },
                            },
                                {
                                    loc: [676, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$233_0'] = ctx.localVars['b'];
                                        ctx.tempVars['$233_1'] = ctx.runtime.roundHalfToEven(80);
                                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"integer"},{"type":"single"}], [ctx.tempVars, '$233_0'], [ctx.tempVars, '$233_1']);
                                        delete ctx.tempVars['$233_0'];
                                        delete ctx.tempVars['$233_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [677, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "*" }, { type: 'semicolon' }, ); },
                                },
                                {
                                    loc: [678, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$234_0'] = ctx.runtime.roundHalfToEven((23 - ctx.localVars['b']));
                                        ctx.tempVars['$234_1'] = ctx.runtime.roundHalfToEven(1);
                                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$234_0'], [ctx.tempVars, '$234_1']);
                                        delete ctx.tempVars['$234_0'];
                                        delete ctx.tempVars['$234_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [679, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "*" }, { type: 'semicolon' }, ); },
                                },
                                {
                                    loc: [675, 17],
                                    async run(ctx) { return { type: 'goto', destLabel: '$232_endif' }; },
                                },
                            {
                                loc: [680, 17],
                                label: '$232_else',
                            },
                                {
                                    loc: [681, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$235_0'] = ctx.localVars['b'];
                                        ctx.tempVars['$235_1'] = ctx.runtime.roundHalfToEven(80);
                                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"integer"},{"type":"single"}], [ctx.tempVars, '$235_0'], [ctx.tempVars, '$235_1']);
                                        delete ctx.tempVars['$235_0'];
                                        delete ctx.tempVars['$235_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [682, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: " " }, { type: 'semicolon' }, ); },
                                },
                                {
                                    loc: [683, 21],
                                    async run(ctx) { (await (async () => {
                                        ctx.tempVars['$236_0'] = ctx.runtime.roundHalfToEven((23 - ctx.localVars['b']));
                                        ctx.tempVars['$236_1'] = ctx.runtime.roundHalfToEven(1);
                                        const result = await ctx.runtime.executeBuiltinProc('LOCATE', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$236_0'], [ctx.tempVars, '$236_1']);
                                        delete ctx.tempVars['$236_0'];
                                        delete ctx.tempVars['$236_1'];
                                        return result;
                                    })()); },
                                },
                                {
                                    loc: [684, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: " " }, { type: 'semicolon' }, ); },
                                },
                            {
                                label: '$232_endif',
                            },
                            {
                                loc: [686, 13],
                                async run(ctx) { ctx.localVars['b'] += ctx.tempVars['$231_step']; return { type: 'goto', destLabel: '$231_loopStart' }; },
                            },
                        {
                            loc: [673, 13],
                            label: '$231_loopEnd',
                        },
                        {
                            loc: [673, 13],
                            async run(ctx) { delete ctx.tempVars['$231_step']; delete ctx.tempVars['$231_end']; },
                        },
                        {
                            loc: [687, 9],
                            async run(ctx) { ctx.localVars['a'] += ctx.tempVars['$226_step']; return { type: 'goto', destLabel: '$226_loopStart' }; },
                        },
                    {
                        loc: [667, 9],
                        label: '$226_loopEnd',
                    },
                    {
                        loc: [667, 9],
                        async run(ctx) { delete ctx.tempVars['$226_step']; delete ctx.tempVars['$226_end']; },
                    },
                {
                    loc: [666, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$225_loopStart' }; },
                },
                {
                    loc: [666, 5],
                    label: '$225_loopEnd',
                },
            ],
        },
        {
            loc: [694, 1],
            type: 'fn',
            name: 'StillWantsToPlay',
            localSymbols: [{"name":"StillWantsToPlay","varType":"var","typeSpec":{"type":"integer"},"varScope":"local"},{"name":"kbd$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"}],
            paramSymbols: [],
            stmts: [
                {
                    loc: [696, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$237_0'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 5)];
                        ctx.tempVars['$237_1'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 6)];
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"integer"},{"type":"integer"}], [ctx.tempVars, '$237_0'], [ctx.tempVars, '$237_1']);
                        delete ctx.tempVars['$237_0'];
                        delete ctx.tempVars['$237_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [697, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$238_0'] = ctx.runtime.roundHalfToEven(10);
                        ctx.tempVars['$238_1'] = "█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$238_0'], [ctx.tempVars, '$238_1']);
                        delete ctx.tempVars['$238_0'];
                        delete ctx.tempVars['$238_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [698, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$239_0'] = ctx.runtime.roundHalfToEven(11);
                        ctx.tempVars['$239_1'] = "█       G A M E   O V E R       █";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$239_0'], [ctx.tempVars, '$239_1']);
                        delete ctx.tempVars['$239_0'];
                        delete ctx.tempVars['$239_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [699, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$240_0'] = ctx.runtime.roundHalfToEven(12);
                        ctx.tempVars['$240_1'] = "█                               █";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$240_0'], [ctx.tempVars, '$240_1']);
                        delete ctx.tempVars['$240_0'];
                        delete ctx.tempVars['$240_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [700, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$241_0'] = ctx.runtime.roundHalfToEven(13);
                        ctx.tempVars['$241_1'] = "█      Play Again?   (Y/N)      █";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$241_0'], [ctx.tempVars, '$241_1']);
                        delete ctx.tempVars['$241_0'];
                        delete ctx.tempVars['$241_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [701, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$242_0'] = ctx.runtime.roundHalfToEven(14);
                        ctx.tempVars['$242_1'] = "█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$242_0'], [ctx.tempVars, '$242_1']);
                        delete ctx.tempVars['$242_0'];
                        delete ctx.tempVars['$242_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [703, 5],
                    label: '$243_loopStart',
                },
                {
                    loc: [703, 5],
                    async run(ctx) { if (!(((await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                    return result;
                })()) != ""))) { return { type: 'goto', destLabel: '$243_loopEnd' }; } },
                },
                {
                    loc: [703, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$243_loopStart' }; },
                },
                {
                    loc: [703, 5],
                    label: '$243_loopEnd',
                },
                {
                    loc: [704, 5],
                    label: '$244_loopStart',
                },
                    {
                        loc: [705, 9],
                        async run(ctx) { ctx.localVars['kbd$'] = (await (async () => {
                            ctx.tempVars['$245_0'] = (await (async () => {
                                const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                                return result;
                            })());
                            const result = await ctx.runtime.executeBuiltinProc('UCASE$', [{"type":"string"}], [ctx.tempVars, '$245_0']);
                            delete ctx.tempVars['$245_0'];
                            return result;
                        })()); },
                    },
                {
                    loc: [704, 5],
                    async run(ctx) { if (((ctx.localVars['kbd$'] === "Y") || (ctx.localVars['kbd$'] === "N"))) { return { type: 'goto', destLabel: '$244_loopEnd' }; } },
                },
                {
                    loc: [704, 5],
                    async run(ctx) { return { type: 'goto', destLabel: '$244_loopStart' }; },
                },
                {
                    loc: [704, 5],
                    label: '$244_loopEnd',
                },
                {
                    loc: [708, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$246_0'] = ctx.runtime.roundHalfToEven(15);
                        ctx.tempVars['$246_1'] = ctx.globalVars['colorTable'].values[ctx.globalVars['colorTable'].getIdx(0, 4)];
                        const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"integer"}], [ctx.tempVars, '$246_0'], [ctx.tempVars, '$246_1']);
                        delete ctx.tempVars['$246_0'];
                        delete ctx.tempVars['$246_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [709, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$247_0'] = ctx.runtime.roundHalfToEven(10);
                        ctx.tempVars['$247_1'] = "                                 ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$247_0'], [ctx.tempVars, '$247_1']);
                        delete ctx.tempVars['$247_0'];
                        delete ctx.tempVars['$247_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [710, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$248_0'] = ctx.runtime.roundHalfToEven(11);
                        ctx.tempVars['$248_1'] = "                                 ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$248_0'], [ctx.tempVars, '$248_1']);
                        delete ctx.tempVars['$248_0'];
                        delete ctx.tempVars['$248_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [711, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$249_0'] = ctx.runtime.roundHalfToEven(12);
                        ctx.tempVars['$249_1'] = "                                 ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$249_0'], [ctx.tempVars, '$249_1']);
                        delete ctx.tempVars['$249_0'];
                        delete ctx.tempVars['$249_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [712, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$250_0'] = ctx.runtime.roundHalfToEven(13);
                        ctx.tempVars['$250_1'] = "                                 ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$250_0'], [ctx.tempVars, '$250_1']);
                        delete ctx.tempVars['$250_0'];
                        delete ctx.tempVars['$250_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [713, 5],
                    async run(ctx) { (await (async () => {
                        ctx.tempVars['$251_0'] = ctx.runtime.roundHalfToEven(14);
                        ctx.tempVars['$251_1'] = "                                 ";
                        const result = await ctx.executeProc(ctx, 'Center', [ctx.tempVars, '$251_0'], [ctx.tempVars, '$251_1']);
                        delete ctx.tempVars['$251_0'];
                        delete ctx.tempVars['$251_1'];
                        return result;
                    })()); },
                },
                {
                    loc: [715, 5],
                    async run(ctx) { if (!((ctx.localVars['kbd$'] === "Y"))) { return { type: 'goto', destLabel: '$252_else' }; } },
                },
                    {
                        loc: [716, 9],
                        async run(ctx) { ctx.localVars['StillWantsToPlay'] = ctx.runtime.roundHalfToEven(ctx.globalVars['TRUE']); },
                    },
                    {
                        loc: [715, 5],
                        async run(ctx) { return { type: 'goto', destLabel: '$252_endif' }; },
                    },
                {
                    loc: [717, 5],
                    label: '$252_else',
                },
                    {
                        loc: [718, 9],
                        async run(ctx) { ctx.localVars['StillWantsToPlay'] = ctx.globalVars['FALSE']; },
                    },
                    {
                        loc: [719, 9],
                        async run(ctx) { (await (async () => {
                            ctx.tempVars['$253_0'] = ctx.runtime.roundHalfToEven(7);
                            ctx.tempVars['$253_1'] = ctx.runtime.roundHalfToEven(0);
                            const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$253_0'], [ctx.tempVars, '$253_1']);
                            delete ctx.tempVars['$253_0'];
                            delete ctx.tempVars['$253_1'];
                            return result;
                        })()); },
                    },
                    {
                        loc: [720, 9],
                        async run(ctx) { (await (async () => {
                            const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                            return result;
                        })()); },
                    },
                {
                    label: '$252_endif',
                },
            ],
        },
    ],
};
