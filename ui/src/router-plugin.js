import dangerousIndex from '@/pages/dangerous-index'
import policy from '@/pages/policy'
import rule from '@/pages/rule'
import subjects from '@/pages/subjects'
import targets from '@/pages/targets'
import matchParams from '@/pages/match-params'
import pluginParams from '@/pages/plugin-params'
import boxes from '@/pages/boxes'

const router = [
  {
    path: '/dangerousIndex',
    name: 'dangerousIndex',
    plugin: 'itsDangerous',
    component: dangerousIndex,
    params: {},
    props: true,
    redirect: '/dangerousIndex/boxes',
    children: [
      {
        path: 'policy',
        name: 'policy',
        title: '策略',
        meta: {},
        plugin: 'itsDangerous',
        component: policy
      },
      {
        path: 'rule',
        name: 'rule',
        title: '规则',
        meta: {},
        plugin: 'itsDangerous',
        component: rule
      },
      {
        path: 'subjects',
        name: 'subjects',
        title: '角色',
        meta: {},
        plugin: 'itsDangerous',
        component: subjects
      },
      {
        path: 'targets',
        name: 'targets',
        title: '目标对象',
        meta: {},
        plugin: 'itsDangerous',
        component: targets
      },
      {
        path: 'match-params',
        name: 'match-params',
        title: '调用参数',
        meta: {},
        plugin: 'itsDangerous',
        component: matchParams
      },
      {
        path: 'plugin-params',
        name: 'plugin-params',
        title: '插件参数',
        meta: {},
        plugin: 'itsDangerous',
        component: pluginParams
      },
      {
        path: 'boxes',
        name: 'boxes',
        title: '试盒',
        meta: {},
        plugin: 'itsDangerous',
        component: boxes
      }
    ]
  }
]
export default router
