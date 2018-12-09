import { FormFieldSchema } from './form';

/**
 * isFullWidth 根据传入的schema的fullWidth属性活type属性判断当前的表单域是否使用全尺寸(100%)宽度
 * @param {FormFieldSchema} field 固定格式的表单域schema
 * @return {boolean} true or false
 **/ 
export const isFullWidth = (field:FormFieldSchema)=>{
    return field.fullWidth || typeof field.type === 'string' && ['textarea','group','array','file','table-array','virtual-group','full-width'].includes(field.type)
}