
/**
 * Generate by 'npm run sync' and generate code is in the file "./build/typescriptPaser.ts"
 * When use this command, it will change the files: ui-tags.json , ui-attributes.js and files "src/config/attributes/*.json"
 * @author Zou Jian <https://github.com/chsword>
*/
import * as affix from './attributes/affix/affix.json';
import * as anchorLink from './attributes/anchor/anchorLink.json';
import * as anchor from './attributes/anchor/anchor.json';
import * as autoComplete from './attributes/auto-complete/autoComplete.json';
import * as alert from './attributes/alert/alert.json';
import * as avatar from './attributes/avatar/avatar.json';
import * as backTop from './attributes/back-top/backTop.json';
import * as badge from './attributes/badge/badge.json';
import * as breadcrumbItem from './attributes/breadcrumb/breadcrumbItem.json';
import * as breadcrumbSeparator from './attributes/breadcrumb/breadcrumbSeparator.json';
import * as breadcrumb from './attributes/breadcrumb/breadcrumb.json';
import * as buttonGroup from './attributes/button/buttonGroup.json';
import * as button from './attributes/button/button.json';
import * as calendar from './attributes/calendar/calendar.json';
import * as meta from './attributes/meta/meta.json';
import * as card from './attributes/card/card.json';
import * as collapsePanel from './attributes/collapse/collapsePanel.json';
import * as collapse from './attributes/collapse/collapse.json';
import * as comment from './attributes/comment/comment.json';
import * as carousel from './attributes/carousel/carousel.json';
import * as cascader from './attributes/cascader/cascader.json';
import * as checkboxGroup from './attributes/checkbox/checkboxGroup.json';
import * as checkbox from './attributes/checkbox/checkbox.json';
import * as col from './attributes/grid/col.json';
import * as localeProvider from './attributes/locale-provider/localeProvider.json';
import * as configProvider from './attributes/config-provider/configProvider.json';
import * as datepickerCommon from './attributes/date-picker/datepickerCommon.json';
import * as rangePicker from './attributes/date-picker/rangePicker.json';
import * as monthPicker from './attributes/date-picker/monthPicker.json';
import * as weekPicker from './attributes/date-picker/weekPicker.json';
import * as datePicker from './attributes/date-picker/datePicker.json';
import * as divider from './attributes/divider/divider.json';
import * as drawer from './attributes/drawer/drawer.json';
import * as menuItem from './attributes/menu/menuItem.json';
import * as subMenu from './attributes/menu/subMenu.json';
import * as menuItemGroup from './attributes/menu/menuItemGroup.json';
import * as menu from './attributes/menu/menu.json';
import * as dropdownButton from './attributes/dropdown/dropdownButton.json';
import * as dropdown from './attributes/dropdown/dropdown.json';
import * as empty from './attributes/empty/empty.json';
import * as formItem from './attributes/form/formItem.json';
import * as form from './attributes/form/form.json';
import * as formModelItem from './attributes/form-model/formModelItem.json';
import * as formModel from './attributes/form-model/formModel.json';
import * as icon from './attributes/icon/icon.json';
import * as inputGroup from './attributes/input/inputGroup.json';
import * as inputSearch from './attributes/input/inputSearch.json';
import * as textArea from './attributes/input/textArea.json';
import * as password from './attributes/input/password.json';
import * as input from './attributes/input/input.json';
import * as inputNumber from './attributes/input-number/inputNumber.json';
import * as layoutSider from './attributes/layout/layoutSider.json';
import * as layoutHeader from './attributes/layout/layoutHeader.json';
import * as layoutContent from './attributes/layout/layoutContent.json';
import * as layoutFooter from './attributes/layout/layoutFooter.json';
import * as layout from './attributes/layout/layout.json';
import * as pagination from './attributes/pagination/pagination.json';
import * as listItem from './attributes/list/listItem.json';
import * as paginationConfig from './attributes/list/paginationConfig.json';
import * as list from './attributes/list/list.json';
import * as option from './attributes/mentions/option.json';
import * as mentions from './attributes/mentions/mentions.json';
import * as treeNode from './attributes/tree-node/treeNode.json';
import * as modal from './attributes/modal/modal.json';
import * as notification from './attributes/notification/notification.json';
import * as tooltipCommon from './attributes/tootip/tooltipCommon.json';
import * as popconfirm from './attributes/popconfirm/popconfirm.json';
import * as popover from './attributes/popover/popover.json';
import * as progress from './attributes/progress/progress.json';
import * as radioGroup from './attributes/radio/radioGroup.json';
import * as radioButton from './attributes/radio/radioButton.json';
import * as radio from './attributes/radio/radio.json';
import * as rate from './attributes/rate/rate.json';
import * as row from './attributes/grid/row.json';
import * as option from './attributes/select/option.json';
import * as optionGroup from './attributes/select/optionGroup.json';
import * as select from './attributes/select/select.json';
import * as skeleton from './attributes/skeleton/skeleton.json';
import * as slider from './attributes/slider/slider.json';
import * as spin from './attributes/spin/spin.json';
import * as statisticCountdown from './attributes/statistic/statisticCountdown.json';
import * as statistic from './attributes/statistic/statistic.json';
import * as step from './attributes/steps/step.json';
import * as steps from './attributes/steps/steps.json';
import * as switchJson from './attributes/switch/switch.json';
import * as column from './attributes/table/column.json';
import * as columnGroup from './attributes/table/columnGroup.json';
import * as paginationConfig from './attributes/table/paginationConfig.json';
import * as table from './attributes/table/table.json';
import * as transfer from './attributes/transfer/transfer.json';
import * as dictionaryTree from './attributes/tree/dictionaryTree.json';
import * as tree from './attributes/tree/tree.json';
import * as treeSelect from './attributes/tree-select/treeSelect.json';
import * as tabPane from './attributes/tabs/tabPane.json';
import * as tabs from './attributes/tabs/tabs.json';
import * as checkableTag from './attributes/tag/checkableTag.json';
import * as tag from './attributes/tag/tag.json';
import * as timePicker from './attributes/time-picker/timePicker.json';
import * as timelineItem from './attributes/timeline/timelineItem.json';
import * as timeline from './attributes/timeline/timeline.json';
import * as tooltip from './attributes/tootip/tooltip.json';
import * as upload from './attributes/upload/upload.json';
import * as result from './attributes/result/result.json';
import * as descriptionsItem from './attributes/descriptions/descriptionsItem.json';
import * as descriptions from './attributes/descriptions/descriptions.json';
import * as pageHeader from './attributes/page-header/pageHeader.json';
export default {
  ...affix,
  ...anchorLink,
  ...anchor,
  ...autoComplete,
  ...alert,
  ...avatar,
  ...backTop,
  ...badge,
  ...breadcrumbItem,
  ...breadcrumbSeparator,
  ...breadcrumb,
  ...buttonGroup,
  ...button,
  ...calendar,
  ...meta,
  ...card,
  ...collapsePanel,
  ...collapse,
  ...comment,
  ...carousel,
  ...cascader,
  ...checkboxGroup,
  ...checkbox,
  ...col,
  ...localeProvider,
  ...configProvider,
  ...datepickerCommon,
  ...rangePicker,
  ...monthPicker,
  ...weekPicker,
  ...datePicker,
  ...divider,
  ...drawer,
  ...menuItem,
  ...subMenu,
  ...menuItemGroup,
  ...menu,
  ...dropdownButton,
  ...dropdown,
  ...empty,
  ...formItem,
  ...form,
  ...formModelItem,
  ...formModel,
  ...icon,
  ...inputGroup,
  ...inputSearch,
  ...textArea,
  ...password,
  ...input,
  ...inputNumber,
  ...layoutSider,
  ...layoutHeader,
  ...layoutContent,
  ...layoutFooter,
  ...layout,
  ...pagination,
  ...listItem,
  ...paginationConfig,
  ...list,
  ...option,
  ...mentions,
  ...treeNode,
  ...modal,
  ...notification,
  ...tooltipCommon,
  ...popconfirm,
  ...popover,
  ...progress,
  ...radioGroup,
  ...radioButton,
  ...radio,
  ...rate,
  ...row,
  ...option,
  ...optionGroup,
  ...select,
  ...skeleton,
  ...slider,
  ...spin,
  ...statisticCountdown,
  ...statistic,
  ...step,
  ...steps,
  ...switchJson,
  ...column,
  ...columnGroup,
  ...paginationConfig,
  ...table,
  ...transfer,
  ...dictionaryTree,
  ...tree,
  ...treeSelect,
  ...tabPane,
  ...tabs,
  ...checkableTag,
  ...tag,
  ...timePicker,
  ...timelineItem,
  ...timeline,
  ...tooltip,
  ...upload,
  ...result,
  ...descriptionsItem,
  ...descriptions,
  ...pageHeader,
}