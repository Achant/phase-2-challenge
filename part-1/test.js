const chai = require('chai')
const {month, reverseSentence, nameProps, filterBtwn} = require('./functions');
const expect = chai.expect


describe('month', function() {
  it('Is a function', function() {
    expect(month).to.be.a('function')
  })

  it('Is returning June when given new Date(2017, 5, 19)', function() {
    expect(month(new Date(2017, 5, 19))).to.deep.equal('June')
  })

  it('Is returning December when given new Date(2017, 11, 25)', function() {
    expect(month(new Date(2017, 11, 25))).to.deep.equal('December')
  })
})


describe('reverseSentence', function() {
  it("Is a function", function() {
    expect(reverseSentence).to.be.a('function')
  })

  it("Is returning 'ears. my for loud too is music The' when given new Sentence('The music is too loud for my ears.')", function() {
    expect(reverseSentence('The music is too loud for my ears.')).to.deep.equal('ears. my for loud too is music The')
  })

  it("Is returning 'morning! Good Amine,' when given 'Amine, Good morning!'", function() {
    expect(reverseSentence('Amine, Good morning!')).to.deep.equal('morning! Good Amine,')
  })
})

describe('nameProps', function() {
  let client = {
  name: 'Sami',
  age: 22,
  phone: '999-999-9999'
};

  it('Is a function', function() {
    expect(nameProps).to.be.a('function')
  })

  it("Is returning ['name', 'age', 'phone'] when given client object", function() {
    expect(nameProps(client)).to.deep.equal(['age', 'name', 'phone'])
  })

  it('Is returning no value array when given no value object', function() {
    expect(nameProps({})).to.deep.equal([])
  })
})


describe('filterBtwn', function() {
  let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow'];

  it('Is a function', function() {
    expect(filterBtwn).to.be.a('function')
  })

  it("Is returning ['dog'] when given (arr, 'deer', 'giraffe')", function() {
    expect(filterBtwn(arr, 'deer', 'giraffe')).to.deep.equal(['dog'])
  })

  it("Is returning ['dog', 'lion', 'cow'] when given (arr, 'chimp', 'lobster')", function() {
    expect(filterBtwn(arr, 'chimp', 'lobster')).to.deep.equal(['dog', 'lion', 'cow'])
  })

  it("Is returning [] when given (arr, 'chickadee', 'chimpanzee')", function() {
    expect(filterBtwn(arr, 'chickadee', 'chimpanzee')).to.deep.equal([])
  })
})
