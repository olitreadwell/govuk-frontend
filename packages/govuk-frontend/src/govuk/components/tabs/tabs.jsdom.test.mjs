import { outdent } from 'outdent'

import { Tabs } from './tabs.mjs'

describe('Tabs', () => {
  describe('with tab and panel identifiers that contain CSS-special characters', () => {
    let $root

    beforeEach(() => {
      document.body.outerHTML = outdent`
        <body class="govuk-frontend-supported">
          <div class="govuk-tabs" data-module="govuk-tabs">
            <ul class="govuk-tabs__list">
              <li class="govuk-tabs__list-item">
                <a class="govuk-tabs__tab" href="#past-week">Past week</a>
              </li>
              <li class="govuk-tabs__list-item">
                <a class="govuk-tabs__tab" href="#a\\">Backslash</a>
              </li>
              <li class="govuk-tabs__list-item">
                <a class="govuk-tabs__tab" href="#a.b">Dotted</a>
              </li>
            </ul>
            <div class="govuk-tabs__panel" id="past-week">Past week</div>
            <div class="govuk-tabs__panel" id="a.b">Dotted</div>
          </div>
        </body>
      `

      $root = document.querySelector('.govuk-tabs')
    })

    describe('getTab()', () => {
      it('matches a tab by its hash', () => {
        const tabs = Object.create(Tabs.prototype)
        tabs._$root = $root

        expect(tabs.getTab('#past-week')).toHaveTextContent('Past week')
      })

      it('matches a tab whose hash contains a backslash without throwing', () => {
        const tabs = Object.create(Tabs.prototype)
        tabs._$root = $root

        expect(() => tabs.getTab('#a\\')).not.toThrow()
        expect(tabs.getTab('#a\\')).toHaveTextContent('Backslash')
      })
    })

    describe('getPanel()', () => {
      it('matches a panel whose id contains a dot', () => {
        const tabs = Object.create(Tabs.prototype)
        tabs._$root = $root

        const $tab = [...$root.querySelectorAll('a.govuk-tabs__tab')].find(
          (tab) => tab.hash === '#a.b'
        )

        expect(tabs.getPanel($tab)).toHaveTextContent('Dotted')
      })
    })
  })
})
