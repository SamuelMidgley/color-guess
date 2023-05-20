export const randInt = (toNum: number): number => {
  return Math.floor(Math.random() * (toNum + 1))
}

interface RGBVal {
  r: number
  g: number
  b: number
}

const generateRGBVal = (): RGBVal => {
  return {
    r: randInt(255),
    g: randInt(255),
    b: randInt(255),
  }
}

export const generateRandomRGB = (): string => {
  const rgbVals = generateRGBVal()

  return `rgb(${rgbVals.r}, ${rgbVals.g}, ${rgbVals.b})`
}

export const generateHexCode = () => {
  const rgbVals = generateRGBVal()

  return (
    "#" +
    ((1 << 24) | (rgbVals.r << 16) | (rgbVals.g << 8) | rgbVals.b)
      .toString(16)
      .slice(1)
      .toUpperCase()
  )
}

export const getColorList = (correctCount: number): string[] => {
  if (correctCount !== 0 && correctCount % 5 === 0) {
    return [generateHexCode(), generateHexCode(), generateHexCode()]
  }
  return [generateRandomRGB(), generateRandomRGB(), generateRandomRGB()]
}
