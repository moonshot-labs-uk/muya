module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'order/properties-order': [[], { severity: 'warning' }],
    // `standard` conflict with `rational-order`
    'declaration-empty-line-before': [
      'never',
      {
        except: ['after-comment', 'after-declaration', 'first-nested'],
        ignore: [
          'after-comment',
          'after-declaration',
          'first-nested',
          'inside-single-line-block'
        ]
      }
    ],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': true,
        severity: 'warning'
      }
    ],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx', 'upx']
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: ['page', 'text', 'view', 'swiper', 'swiper-item', 'image', 'navigator']
      }
    ],
    'no-empty-source': null
  }
}
