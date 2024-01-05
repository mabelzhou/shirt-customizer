import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#FFC0CB',
          '#FF0000',
          '#FFA500',
          '#ccc',
          '#008000',
          '#EFBD4E',
          '#2CCCE4',
          '#FF96AD',
          '#5F123D',
          '#512314',
          '#C19277',
          '#726DE8',
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker