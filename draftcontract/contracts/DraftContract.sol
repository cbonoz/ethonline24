// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DraftContract {
    // Mapping from unique hash to JSON-encoded lineup
    mapping(string => string) private lineups;
    mapping(string => address) private lineupOwners;

    // Event emitted when a lineup is saved
    event LineupSaved(string indexed hash, string lineupJson);
    event LineupChallenged(string indexed hash, address indexed challenger, address indexed challenged);

    // Save a lineup associated with a unique hash
    function saveLineup(string memory hash, string memory lineupJson) public {
        require(bytes(hash).length > 0, "Hash cannot be empty");
        require(bytes(lineupJson).length > 0, "Lineup JSON cannot be empty");

        lineups[hash] = lineupJson;
        lineupOwners[hash] = msg.sender;
        emit LineupSaved(hash, lineupJson);
    }

    // Fetch a lineup by its unique hash
    function fetchLineup(string memory hash) public view returns (string memory) {
        require(bytes(lineups[hash]).length > 0, "Lineup does not exist");
        return lineups[hash];
    }

    // function challenge hash lineup
    // emit a challenge event to the given lineup owner
    function challengeLineup(string memory hash) public {
        require(bytes(lineups[hash]).length > 0, "Lineup does not exist");
        require(lineupOwners[hash] != msg.sender, "You cannot challenge your own lineup");
        emit LineupChallenged(hash, msg.sender, lineupOwners[hash]);
    }

}
