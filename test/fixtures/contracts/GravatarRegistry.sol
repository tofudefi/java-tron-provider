pragma solidity ^0.5.0;

contract GravatarRegistry {
  event NewGravatar(uint id, address owner, string displayName, string imageUrl);
  event UpdatedGravatar(uint id, address owner, string displayName, string imageUrl);

  struct Gravatar {
    address owner;
    string displayName;
    string imageUrl;
  }

  Gravatar[] public gravatars;

  mapping (uint => address) public gravatarToOwner;
  mapping (address => uint) public ownerToGravatar;

  function createGravatar(string memory _displayName, string memory _imageUrl) public {
    require(ownerToGravatar[msg.sender] == 0);
    uint id = gravatars.push(Gravatar(msg.sender, _displayName, _imageUrl)) - 1;

    gravatarToOwner[id] = msg.sender;
    ownerToGravatar[msg.sender] = id;

    emit NewGravatar(id, msg.sender, _displayName, _imageUrl);
  }

  function getGravatar(address owner) public view returns (string memory, string memory) {
    uint id = ownerToGravatar[owner];
    return (gravatars[id].displayName, gravatars[id].imageUrl);
  }

  function updateGravatarName(string memory _displayName) public {
    require(ownerToGravatar[msg.sender] != 0);
    require(msg.sender == gravatars[ownerToGravatar[msg.sender]].owner);

    uint id = ownerToGravatar[msg.sender];

    gravatars[id].displayName = _displayName;
    emit UpdatedGravatar(id, msg.sender, _displayName, gravatars[id].imageUrl);
  }

  function updateGravatarImage(string memory _imageUrl) public {
    require(ownerToGravatar[msg.sender] != 0);
    require(msg.sender == gravatars[ownerToGravatar[msg.sender]].owner);

    uint id = ownerToGravatar[msg.sender];

    gravatars[id].imageUrl =  _imageUrl;
    emit UpdatedGravatar(id, msg.sender, gravatars[id].displayName, _imageUrl);
  }
}
