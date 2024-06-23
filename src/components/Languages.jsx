import React from 'react'
import { languages } from '../utils/languages'
import Checkbox from '../theme/Checkbox'

const Languages = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
    <p className="text-xl font-semibold text-blue-700 border-b-2 pb-2 border-blue-300 mb-4">Skills</p>
    <Checkbox data={languages} />
  </div>
  )
}

export default Languages