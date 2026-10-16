import { axe, render } from '@govuk-frontend/helpers/puppeteer'
import { getExamples } from '@govuk-frontend/lib/components'
import { KnownDevices } from 'puppeteer'

const iPhone = KnownDevices['iPhone 6']

describe('/components/tabs', () => {
  let axeRules

  beforeAll(() => {
    axeRules = {
      /**
       * Ignore 'Element has insufficient color contrast' for WCAG Level AAA
       *
       * Affects 'Anchor' link
       */
      'color-contrast-enhanced': { enabled: false }
    }
  })

  describe('component examples', () => {
    it('passes accessibility tests', async () => {
      const examples = await getExamples('tabs')

      for (const exampleName in examples) {
        await render(page, 'tabs', examples[exampleName])
          // Log errors for invalid examples
          .catch(({ message }) => console.warn(message))

        await expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      }
    }, 120000)
  })

  describe('contents list dash', () => {
    beforeAll(async () => {
      // The tabs collapse to a contents list, which renders the dash, on
      // smaller screens
      await page.emulate(iPhone)
    })

    it('renders the decorative dash without announcing it', async () => {
      const examples = await getExamples('tabs')
      await render(page, 'tabs', examples.default)

      // Check the dash is still rendered for sighted users
      const dashContent = await page.$eval(
        '.govuk-tabs__list-item',
        ($item) => window.getComputedStyle($item, '::before').content
      )
      expect(dashContent).toContain('\u2014')

      // Check the dash is hidden from assistive technology
      const $tabs = await page.$('.govuk-tabs')
      const snapshot = await page.accessibility.snapshot({
        root: $tabs,
        interestingOnly: false
      })

      expect(getNodeNames(snapshot)).not.toContain('\u2014')
    })
  })
})

/**
 * Collects the names of every node in an accessibility tree snapshot
 *
 * @param {import('puppeteer').SerializedAXNode | null} node - Accessibility tree node
 * @returns {string[]} Node names
 */
function getNodeNames(node) {
  if (!node) {
    return []
  }

  return [
    node.name,
    ...(node.children ?? []).flatMap((child) => getNodeNames(child))
  ]
}
