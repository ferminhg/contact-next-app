import { contactFactory } from "../../src/domain/contact"

describe('Testing Contact Domain', () => {
    it('Should create a contact using the Factory', () => {
        let contact = contactFactory(0, 0, 0, 0)
        expect(contact.firstName).toBe(0)
    })
})
