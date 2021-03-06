/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const writeSVGIcons = require('./write-svg-icons');
const shell = require('shelljs');

const SHAPE_SETS = ['core', 'commerce', 'essential', 'media', 'social', 'technology', 'travel', 'chart', 'text-edit'];

writeSVGIcons(SHAPE_SETS, () => {
  shell.exec('cd dist/clr-icons-sets; zip -r all.zip ./**/*');
  SHAPE_SETS.forEach(setName => {
    shell.exec(`cd dist/clr-icons-sets; zip -r ${setName}.zip ./${setName}/*; rm -r ./${setName}`);
  });
});
