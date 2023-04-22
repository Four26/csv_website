import React, { useState } from "react";
import "../stylesheets/command.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Command = () => {
    const [activeCommand, setActiveCommand] = useState("all");
    const [searchValue, setSearchValue] = useState("");

    const commands = [
        { id: 1, name: "All", className: "all" },
        { id: 2, name: "Genarate CSV", className: "generatecsv" },
        { id: 3, name: "Fun", className: "fun" },
        {
            id: 4,
            name: (
                <>
                    <input
                        type="text"
                        placeholder="Search for a command"
                        className="search-input"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                </>
                
            ),
            className: "search",
        },
    ];

    const commandList = [
        {
            id: 1,
            name: "csv  + (role)",
            className: "generatecsv",
            description: "Generates a CSV file from a list of roles in your server.",
        },
        { id: 2, name: "Command 2", className: "generatecsv", description: "Description 2" },
        { id: 3, name: "Command 3", className: "fun", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et." },
        { id: 4, name: "Command 4", className: "fun", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et." },
    ];

    const handleCommandClick = (className) => {
        if (className === "search") {
            return;
        }
        const prevActiveCommand = document.querySelector('.active-command');
        if (prevActiveCommand) {
            prevActiveCommand.classList.remove('active-command');
        }
        setActiveCommand(className);
    };

    const filteredCommands = commandList.filter((command) =>
        command.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        `/${command.name.toLowerCase().replace(" ", "")}`.includes(searchValue.toLowerCase())
    );

    return (
        <div className="main-container">
            <div className="command-container">
                <div className="command-content">
                    <h1>Commands</h1>
                    <p>
                        Know all all you need to know about Dank Memer's broad set of commands,
                        including the requisite permissions.
                    </p>
                    <div className="command-list">
                        <ul className="commands">
                            {commands.map((command) => (
                                <li
                                    key={command.id}
                                    className={`command ${activeCommand === command.className ? "active-command" : ""
                                        }`}
                                    onClick={() => handleCommandClick(command.className)}
                                >
                                    {command.name}
                                </li>
                            ))}
                        </ul>
                        <div className="result">
                            {filteredCommands.map((command) => (
                                <div
                                    key={command.id}
                                    className={`command ${command.className}`}
                                    style={{
                                        display:
                                            activeCommand === "all" || activeCommand === command.className
                                                ? "block"
                                                : "none",
                                    }}
                                >
                                    <h2>{`/${command.name.toLowerCase().replace(" ", "")}`}</h2>
                                    <p>{command.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Command;
