module.exports = {
  title: 'MouWorks',
  description: 'MouWorks',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  lastUpdated: 'Last Updated',
  themeConfig: {
    repo: 'mouworks',
    nav:[ // 导航栏配置
      {text: 'DevOps', link: '/devops/',
        items: [
          { text: 'Deployment', link: '/devops/deployment_questions.html'},
          { text: 'Linux', link: '/devops/linux.html'},
          { text: 'CircleCI', link: '/devops/circleci.html'},
          { text: 'Ansible', link: '/devops/ansible.html'},
          { text: 'Deployer', link: '/devops/deployer.html'},
          { text: 'k8s', link: '/devops/k8s.html'},
          { text: 'AWS EKS', link: '/devops/eks.html'},
          { text: 'Blackfire效能監控', link: '/devops/blackfire.html'},
          { text: 'AWS CDK', link: '/devops/aws_cdk.html'},
        ]
      },
      {text: '後端', link: '/backend/',
        items: [
          { text: 'ECMAScript', link: '/backend/ecmaScript.html'},
          { text: 'NestJS', link: '/backend/nestjs.html'},
          { text: 'DB備份', link: '/backend/DB_backup.html'},
          { text: 'Redis', link: '/backend/redis.html'},
          { text: 'Cassandra', link: '/backend/cassandra.html'},
          { text: 'Socket', link: '/backend/socket.html'},
          { text: 'Queue', link: '/backend/queue.html'},
          { text: 'Php5升7', link: '/backend/upgrade_to_seven.html'},
          { text: 'Nodejs', link: '/backend/nodejs.html'},
          { text: 'Redis Vs Memcached', link: '/backend/redisVsMc.html'},
          { text: 'JS 設計模式', link: '/backend/js_pattern.html'},
          { text: 'SQL練習', link: '/backend/sql.html'},
        ]
      },
      {text: 'Protip', link: '/protip/',
        items: [
          { text: 'Alias', link: '/protip/alias.html'},
          { text: 'Makefile', link: '/protip/makefile.html'},
          { text: 'SSH-Key', link: '/protip/ssh_key.html'},
          { text: 'SetupScript', link: '/protip/setupscript.html'},
          { text: 'SlowLog', link: '/protip/slowlog.html'},
          { text: 'logrotate', link: '/protip/logrotate.html'},
          { text: 'php-fpm', link: '/protip/php-fpm.html'},
        ]
      },
      {text: 'Resume',
        items: [
          { text: 'Resume', link: '/resume/resume.html'},
          { text: '中文履歷', link: '/resume/resume_chinese.html'}
        ]
      },
      {text: 'Study',
        items: [
          { text: '資料結構', link: '/study/data_structure.html'},
          { text: '演算法', link: '/study/algo.html'},
          { text: '設計模式', link: '/study/design_pattern.html'},
          { text: 'LeetCode', link: '/study/leetcode.html'},
          { text: 'DailyInterviewPro', link: '/study/dailyInterviewPro.html'},
          { text: 'JSDC 2017 Note', link: '/study/jsdc_2017.html'},
        ]
      },
      {text: 'Projects',
        items: [
          { text: 'jobHunter', link: '/projects/jobHunter.html'},
          { text: 'M1GA', link: '/projects/m1ga.html'},
          { text: 'WeddingHelper', link: '/projects/weddinghelper.html'},
          { text: 'SwingEventsTaipei', link: '/projects/swingEventsTaipei.html'},
        ]
      },
      {text: 'Site', link: 'https://m0u.work' }
    ],
    sidebar: 'auto',
    // sidebar: [
    //   {
    //     title: 'MouWorks',   // required
    //     path: '/',      // optional, which should be a absolute path.
    //     collapsable: true, // optional, defaults to true
    //     sidebarDepth: 1,    // optional, defaults to 1
    //     children: [
    //       '/'
    //     ]
    //   }],
    serviceWorker: {
      updatePopup: true, // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      updatePopup: {
         message: "New content is available.",
         buttonText: "Refresh"
      }
    }
  }
};
