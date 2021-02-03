import router from '../src/router-plugin'
const implicitRoute = {
  'dangerousIndex/boxes': {
    parentBreadcrumb: { 'zh-CN': '高危规则配置', 'en-US': 'Dangerous Config' },
    childBreadcrumb: { 'zh-CN': '试盒', 'en-US': 'Boxes' }
  },
  'dangerousIndex/policy': {
    parentBreadcrumb: { 'zh-CN': '高危规则配置', 'en-US': 'Dangerous Config' },
    childBreadcrumb: { 'zh-CN': '策略', 'en-US': 'Policy' }
  },
  'dangerousIndex/rule': {
    parentBreadcrumb: { 'zh-CN': '高危规则配置', 'en-US': 'Dangerous Config' },
    childBreadcrumb: { 'zh-CN': '规则', 'en-US': 'Rule' }
  },
  'dangerousIndex/subjects': {
    parentBreadcrumb: { 'zh-CN': '高危规则配置', 'en-US': 'Dangerous Config' },
    childBreadcrumb: { 'zh-CN': '角色', 'en-US': 'Subjects' }
  },
  'dangerousIndex/targets': {
    parentBreadcrumb: { 'zh-CN': '高危规则配置', 'en-US': 'Dangerous Config' },
    childBreadcrumb: { 'zh-CN': '目标对象', 'en-US': 'Targets' }
  },
  'dangerousIndex/match-params': {
    parentBreadcrumb: { 'zh-CN': '高危规则配置', 'en-US': 'Dangerous Config' },
    childBreadcrumb: { 'zh-CN': '调用参数', 'en-US': 'Match Params' }
  },
  'dangerousIndex/plugin-params': {
    parentBreadcrumb: { 'zh-CN': '高危规则配置', 'en-US': 'Dangerous Config' },
    childBreadcrumb: { 'zh-CN': '插件参数', 'en-US': 'Plugin Params' }
  }
}
window.addImplicitRoute(implicitRoute)
window.addRoutes && window.addRoutes(router, 'dangerous')
