/* eslint-disable */

const USER_CONFIG = {

  // 使用微信测试号
  APP_ID: 'wx26d35d9b8bc06ac0',
  APP_SECRET: '84f5ae4abc66e6bbf818122789cb0d8a',

  PROVINCE: '北京',
  CITY: '朝阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '慧娇',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKKxU6HoMBE6SCn6BWREJ0uJVcAg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '7AwaAoDhDnU1rO8zpEA1wOLV-W6_M6HV7_jmCdtiZGE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-29',
     
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '慧娇', year: '1989', date: '02-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '慧娇', year: '1989', date: '03-29',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '07-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        { keyword: 'love_day', date: '2022-07-28' },
      ],
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'vhpaObSBKp3yjL-_7eNcYqGuIKuBJOgSBQS1oyMzNLY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKKxU6DUAyR89LuSHJ4Z0m6tcD_8',
    }
  ],
}

module.exports = USER_CONFIG
