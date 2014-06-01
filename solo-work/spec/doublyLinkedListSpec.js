var expect = chai.expect;
var assert = chai.assert;

describe("doublyLinkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = new DoublyLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head')
    expect(linkedList).to.have.property('tail')
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

   it("should be doubly linked", function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.previous.value).to.equal(4);
    expect(linkedList.head.next.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    // console.log(linkedList)
    linkedList.removeHead();
        // console.log(linkedList) 
    expect(linkedList.head.value).to.equal(5);
  });

  it("should remove the tail from the list when removeTail is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
    // console.log(linkedList)
    linkedList.removeTail();
        // console.log(linkedList) 
    expect(linkedList.tail.value).to.equal(4);
  });


  it("should contain a value that was added to tail", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
    expect(linkedList.tail.value).to.equal(5);
  });

    it("should contain a value that was added to head", function(){
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
    expect(linkedList.head.value).to.equal(5);
  });


  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  // add more tests here to test the functionality of linkedList
});
