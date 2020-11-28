import ShuffleText from 'shuffle-text'

const shuffleText = (id: string): void => {
  // Get element
  const element = document.getElementById(id)
  console.log({ element })

  if (!element) {
    console.log('No id found.')
    return
  }

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
    shuffleText.duration = 600
    // Trigger effect
    shuffleText.start()
    // Set text
    console.log({ cache })

    // Set text to avoid collapsing text
    // TODO: kinda hack and not good solution..
    setTimeout(() => {
      element.innerText = cache
    }, 700)
  })

  element.addEventListener('mouseleave', () => {})
}

export default shuffleText
