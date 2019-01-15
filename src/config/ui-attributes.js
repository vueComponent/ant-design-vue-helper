import * as form from './attributes/form/form.json'
import * as formItem from './attributes/form/formItem.json'
import * as button from './attributes/button/button.json'
import * as row from './attributes/grid/row.json'
import * as col from './attributes/grid/col.json'
import * as layout from './attributes/layout/layout.json'
import * as layoutSider from './attributes/layout/layoutSider.json'
import * as affix from './attributes/affix/affix.json'
import * as breadcrumb from './attributes/breadcrumb/breadcrumb.json'
import * as dropdown from './attributes/dropdown/dropdown.json'
import * as dropdownButton from './attributes/dropdown/dropdownButton.json'
import * as menu from './attributes/menu/menu.json'
import * as menuItem from './attributes/menu/menuItem.json'
import * as menuSub from './attributes/menu/menuSub.json'
import * as pagination from './attributes/pagination/pagination.json'
import * as steps from './attributes/steps/steps.json'
import * as step from './attributes/steps/step.json'
import * as autoComplete from './attributes/autoComplete/autoComplete.json'
import * as cascader from './attributes/cascader/cascader.json'
import * as checkbox from './attributes/checkbox/checkbox.json'
import * as checkboxGroup from './attributes/checkbox/checkboxGroup.json'
import * as datePicker from './attributes/date-picker/date.json'
import * as monthPicker from './attributes/date-picker/month.json'
import * as rangePicker from './attributes/date-picker/range.json'
import * as weekPicker from './attributes/date-picker/week.json'

import * as inputGroup from './attributes/input/group.json'
import * as input from './attributes/input/input.json'
import * as inputTextArea from './attributes/input/textarea.json'

import * as inputNumber from './attributes/inputNumber/number.json'

import * as radio from './attributes/radio/radio.json'
import * as radioGroup from './attributes/radio/radioGroup.json'

import * as rate from './attributes/rate/rate.json'

import * as select from './attributes/select/select.json'
import * as selectOption from './attributes/select/selectOption.json'

import * as slider from './attributes/slider/slider.json'

import * as switchJson from './attributes/switch/switch.json'

import * as timePicker from './attributes/timePicker/timePicker.json'

import * as transfer from './attributes/transfer/transfer.json'

import * as treeSelect from './attributes/treeSelect/treeSelect.json'
import * as treeSelectNode from './attributes/treeSelect/treeSelectNode.json'

import * as upload from './attributes/upload/upload.json'

import * as avatar from './attributes/avatar/avatar.json'

import * as badge from './attributes/badge/badge.json'

import * as calendar from './attributes/calendar/calendar.json'

import * as card from './attributes/card/card.json'
import * as cardMeta from './attributes/card/cardMeta.json'

import * as carousel from './attributes/carousel/carousel.json'

import * as collapse from './attributes/collapse/collapse.json'
import * as collapsePanel from './attributes/collapse/collapsePanel.json'

import * as list from './attributes/list/list.json'
import * as listItem from './attributes/list/listItem.json'
import * as listItemMeta from './attributes/list/listItemMeta.json'

import * as popover from './attributes/popover/popover.json'

import * as tooltip from './attributes/tooltip/tooltip.json'

import * as table from './attributes/table/table.json'

import * as tabs from './attributes/tabs/tabs.json'
import * as tabPane from './attributes/tabs/tabpane.json'


import * as tag from './attributes/tag/tag.json'
import * as checkableTag from './attributes/tag/checkableTag.json'


import * as timeline from './attributes/timeline/timeline.json'
import * as timelineItem from './attributes/timeline/timelineItem.json'

import * as tree from './attributes/tree/tree.json'
import * as treeNode from './attributes/tree/treeNode.json'

import * as alert from './attributes/alert/alert.json'

import * as drawer from './attributes/drawer/drawer.json'

import * as popconfirm from './attributes/popconfirm/popconfirm.json'

import * as progress from './attributes/progress/progress.json'

import * as skeleton from './attributes/skeleton/skeleton.json'

import * as spin from './attributes/spin/spin.json'

import * as anchor from './attributes/anchor/anchor.json'

import * as backtop from './attributes/backtop/backtop.json'

import * as divider from './attributes/divider/divider.json'

import * as comment from './attributes/comment/comment.json'


export default {
  ...form,
  ...formItem,
  ...button,
  ...row,
  ...col,
  ...layout,
  ...layoutSider,
  ...affix,
  ...breadcrumb,
  ...dropdownButton,
  ...dropdown,
  ...menu,
  ...menuItem,
  ...menuSub,
  ...pagination,
  ...steps,
  ...step,
  ...autoComplete,
  ...cascader,
  ...checkbox,
  ...checkboxGroup,
  ...datePicker,
  ...monthPicker,
  ...rangePicker,
  ...weekPicker,
  ...input,
  ...inputGroup,
  ...inputTextArea,
  ...inputNumber,
  ...radio,
  ...radioGroup,
  ...rate,
  ...select,
  ...selectOption,
  ...slider,
  ...switchJson,
  ...timePicker,
  ...transfer,
  ...treeSelect,
  ...treeSelectNode,
  ...upload,
  ...avatar,
  ...badge,
  ...calendar,
  ...card,
  ...cardMeta,
  ...carousel,
  ...collapse,
  ...collapsePanel,
  ...list,
  ...listItem,
  ...listItemMeta,
  ...popover,
  ...tooltip,
  ...table,
  ...tabs,
  ...tabPane,
  ...tag,
  ...checkableTag,
  ...timeline,
  ...timelineItem,
  ...tree,
  ...treeNode,
  ...alert,
  ...drawer,
  ...popconfirm,
  ...progress,
  ...skeleton,
  ...spin,
  ...anchor,
  ...backtop,
  ...divider,
  ...{
   "a-locale-provider/locale": {
    "description": "language package setting, you can find the packages in this path: antd/lib/locale-provider/",
		"optionType": "object",
		"defaultValue": "-"
   } 
  },
  ...{
    "a-config-provider/getPopupContainer": {
      "description": "to set the container of the popup element. The default is to create a div element in body.",
      "optionType": "Function(triggerNode)",
      "defaultValue": "() => document.body"
    }
  },
  ...comment,
}