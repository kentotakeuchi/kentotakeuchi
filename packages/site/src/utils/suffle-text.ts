import ShuffleText from 'shuffle-text'

const shuffleText = (id: string): void => {
  // Get element
  const element = document.getElementById(id)

  if (!element) {
    console.log('No id found.')
    return
  }

  // Store original inner text to restore after collapsing the text
  const cache = element.innerText

  // Create instance
  const shuffleText = new ShuffleText(element)

  // Trigger effect
  shuffleText.start()

  // Set event
  element.addEventListener('mouseover', () => {
    // Create instance
    const shuffleText = new ShuffleText(element)

    // Set duration of the effect
    shuffleText.duration = 400

    // Set original text and the length
    shuffleText.setText(cache)

    // Trigger effect
    shuffleText.start()
  })
}

export default shuffleText
