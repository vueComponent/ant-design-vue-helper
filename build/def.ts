/**
 * To defined the interface use in the config json
 * @author Zou Jian <https://github.com/chsword>
 */
interface TagAttributes {
    description: string;
    optionType: string | object;
    defaultValue: string;
    options?: string[];
}
interface UITag {
    defaults?: string[];
    attributes?: string[];
    description?: string;
    subtags?: string[]
}
export { TagAttributes, UITag };