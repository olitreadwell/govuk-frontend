import { FileUpload } from './file-upload.mjs'

describe('FileUpload', () => {
  describe('with an input id that contains a double quote', () => {
    let $root

    beforeEach(() => {
      document.body.outerHTML = `
        <body class="govuk-frontend-supported">
          <div data-module="govuk-file-upload">
            <input class="govuk-file-upload__input" id="a&quot;b" type="file" name="file">
            <label class="govuk-label" for="a&quot;b">Upload a file</label>
          </div>
        </body>
      `

      $root = document.querySelector('[data-module="govuk-file-upload"]')
    })

    it('can find the label and initialise without throwing', () => {
      expect(() => new FileUpload($root)).not.toThrow()
    })
  })
})
