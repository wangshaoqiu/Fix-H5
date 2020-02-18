
import {
  get
} from '@/utils/request'

export const getOptions = param => get('/pc/commons/enums', param)
export const uploadStrategy = () => get('/pc/commons/project-materials/upload-strategy')
