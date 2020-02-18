import {
  post2, get2
} from '../utils/request'

export const getList = param => get2('/v1/ai-tools', param)
export const getDetail = (toolId) => get2('/v1/ai-tools/'+ toolId)
export const guess = (param,toolId) => post2('/v1/ai-tools/'+ toolId +'/predict', param)
