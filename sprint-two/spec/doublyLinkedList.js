describe('doublyLinkedList', function() {
  var doublylinkedlist;

  beforeEach(function() {
    doublylinkedlist = doublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublylinkedlist).to.have.property('_head');
    expect(doublylinkedlist).to.have.property('_tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeHead", "removeTail", and "contains"', function() {
    expect(doublylinkedlist.addToTail).to.be.a('function');
    expect(doublylinkedlist.removeHead).to.be.a('function');
    expect(doublylinkedlist.contains).to.be.a('function');
    expect(doublylinkedlist.addToHead).to.be.a('function');
    expect(doublylinkedlist.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublylinkedlist.addToTail(4);
    expect(doublylinkedlist._tail.value).to.equal(4);
    doublylinkedlist.addToTail(5);
    expect(doublylinkedlist._tail.value).to.equal(5);
    expect(doublylinkedlist._tail.previous.value).to.equal(4);
  });

  it('should designate a new head when when addToHead is called', function() {
    doublylinkedlist.addToHead(4);
    doublylinkedlist.addToHead(5);
    expect(doublylinkedlist._head.value).to.equal(5);
  });

  it('should designate a new tail and return the old one when removeTail is called', function() {
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    expect(doublylinkedlist.removeTail()).to.equal(5);
    expect(doublylinkedlist._tail.next).to.equal(null);
    expect(doublylinkedlist._tail.previous).to.equal(null);
    expect(doublylinkedlist.removeTail()).to.equal(4);
    console.log(doublylinkedlist._tail);
  });

  it('should return the value of the former tail when new tail is added', function() {
    doublylinkedlist.addToTail(4);
    expect(doublylinkedlist.addToTail(5)).to.equal(4);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    expect(doublylinkedlist._head.value).to.equal(4);
    doublylinkedlist.removeHead();
    expect(doublylinkedlist._head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublylinkedlist.addToTail(4);
    expect(doublylinkedlist.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    expect(doublylinkedlist.contains(4)).to.equal(true);
    expect(doublylinkedlist.contains(5)).to.equal(true);
    expect(doublylinkedlist.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    doublylinkedlist.removeHead();
    expect(doublylinkedlist.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublylinkedlist
});
