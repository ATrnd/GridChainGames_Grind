// Global variable for hacked dollars
let hackedDollars = 0; // Default value for hacked dollars

// Model
const appModel = {
    currentState: 1,
    states: {
        1: {
            html: `
                <div class="wrap flex-core flex-col flex-center">
                    <div class="form-ctr flex-core flex-col">
                        <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">addr</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p2">0x0000000000000000000000000000000000000000</p>
                        </div>
                        <div class="nfo-ctr-2 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">connection</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p2">disconnected</p>
                        </div>
                        <div id="connection-trigger" class="connect-enabled nfo-ctr-3 flex-core flex-row flex-center-start">
                            <p class="nfo-p3">connect</p>
                        </div>
                    </div>
                </div>
            `,
            eventListeners: [
                {
                    selector: '#connection-trigger',
                    event: 'click',
                    handler: function() {
                        setState(2);
                    }
                }
            ]
        },
        2: {
            html: `
                <div class="wallet-wrap flex-core flex-col flex-center">
                    <div class="wallet-ctr flex-core flex-col flex-start">
                        <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">connection request</p>
                        </div>
                        <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">website</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p4">GridchainGamesGrind</p>
                        </div>
                        <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">addr</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
                        </div>
                        <div class="nfo-ctr-6 flex-core flex-row flex-center-end">
                            <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
                            <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">connect</div>
                        </div>
                    </div>
                </div>

                <div class="wrap flex-core flex-col flex-center dim">
                    <div class="form-ctr flex-core flex-col">
                        <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">addr</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p2">0x0000000000000000000000000000000000000000</p>
                        </div>
                        <div class="nfo-ctr-2 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">connection</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p2">disconnected</p>
                        </div>
                        <div id="connection-trigger" class="connect-disabled nfo-ctr-3 flex-core flex-row flex-center-start">
                            <p class="nfo-p3">connect</p>
                        </div>
                    </div>
                </div>
            `,
            eventListeners: [
                {
                    selector: '#wallet-connection-reject',
                    event: 'click',
                    handler: function() {
                        setState(1);
                    }
                },
                {
                    selector: '#wallet-connection-enable',
                    event: 'click',
                    handler: function() {
                        setState(3);
                    }
                }
            ]
        },
        3: {
            html: function() {
                return `
                <div class="wrap flex-core flex-col flex-center">
                    <div class="form-ctr flex-core flex-col">
                        <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">connection</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p2">connected</p>
                        </div>
                        <div class="nfo-ctr-2 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">addr</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p2">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
                        </div>
                        <div class="nfo-ctr-7 flex-core flex-row flex-center-start">
                            <div id="hack-dollars-trigger" class="connect-enabled nfo-sub-ctr-1 flex-core flex-row flex-center">
                                <p class="nfo-p5">hack<span>$</span></p>
                            </div>
                            <div class="nfo-sub-ctr-2 flex-core flex-row flex-center-start">
                                <p class="nfo-p6">$</p>
                                <p id="hacked-dollars" class="nfo-p7">${hackedDollars}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            },
            eventListeners: [
                {
                    selector: '#hack-dollars-trigger',
                    event: 'click',
                    handler: function() {
                        setState(4);
                    }
                }
            ]
        },
        4: {
            html: function() {
                return `
                <div class="wallet-wrap flex-core flex-col flex-center">
                    <div class="wallet-ctr flex-core flex-col flex-start">
                        <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">signature request</p>
                        </div>
                        <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">from</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p4">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
                        </div>
                        <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">to</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
                        </div>
                        <div class="nfo-ctr-6 flex-core flex-col flex-end-center">
                            <div class="nfo-sub-ctr-3 flex-core flex-col flex-start">
                                <p class="nfo-p8 lg-mb-16"><span>gas fee</span> :: 0,0001 ETH</p>
                                <p class="nfo-p8"><span>amount</span> :: 0 ETH</p>
                            </div>
                            <div class="flex-core flex-row flex-center">
                                <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
                                <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">sign</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="wrap flex-core flex-col flex-center dim">
                    <div class="form-ctr flex-core flex-col">
                        <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">connection</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p2">connected</p>
                        </div>
                        <div class="nfo-ctr-2 flex-core flex-row flex-center-start">
                            <p class="nfo-p1">addr</p>
                            <p class="nfo-sep-1">::</p>
                            <p class="nfo-p2">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
                        </div>
                        <div class="nfo-ctr-7 flex-core flex-row flex-center-start">
                            <div id="hack-dollars-trigger" class="connect-disabled nfo-sub-ctr-1 flex-core flex-row flex-center">
                                <p class="nfo-p5">hack<span>$</span></p>
                            </div>
                            <div class="nfo-sub-ctr-2 flex-core flex-row flex-center-start">
                                <p class="nfo-p6">$</p>
                                <p id="hacked-dollars" class="nfo-p7">${hackedDollars}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            },
            eventListeners: [
                {
                    selector: '#wallet-connection-reject',
                    event: 'click',
                    handler: function() {
                        setState(3);
                    }
                },
                {
                    selector: '#wallet-connection-enable',
                    event: 'click',
                    handler: function() {
                        hackedDollars += 1000; // Add 1000 to hacked dollars
                        setState(5);
                    }
                }
            ]
        },
        5: {
            html: function() {
                return `
                    <div class="wrap flex-core flex-col flex-center">
                        <div class="form-ctr flex-core flex-col">
                            <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                                <p class="nfo-p1">connection</p>
                                <p class="nfo-sep-1">::</p>
                                <p class="nfo-p2">connected</p>
                            </div>
                            <div class="nfo-ctr-2 flex-core flex-row flex-center-start">
                                <p class="nfo-p1">addr</p>
                                <p class="nfo-sep-1">::</p>
                                <p class="nfo-p2">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
                            </div>
                            <div class="nfo-ctr-7 flex-core flex-row flex-center-start">
                                <div id="hack-dollars-trigger" class="connect-enabled nfo-sub-ctr-1 flex-core flex-row flex-center">
                                    <p class="nfo-p5">hack<span>$</span></p>
                                </div>
                                <div class="nfo-sub-ctr-2 flex-core flex-row flex-center-start">
                                    <p class="nfo-p6">$</p>
                                    <p id="hacked-dollars" class="nfo-p7">${hackedDollars}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            },
            eventListeners: [
                {
                    selector: '#hack-dollars-trigger',
                    event: 'click',
                    handler: function() {
                        setState(4);
                    }
                }
            ]
        }
    }
};

// View
function render() {
    const state = appModel.states[appModel.currentState];
    if (!state) {
        document.body.innerHTML = "<p>Invalid state</p>";
        return;
    }

    // Render the HTML (supporting functions for dynamic content)
    const html = typeof state.html === 'function' ? state.html() : state.html;
    document.body.innerHTML = html;

    // Attach event listeners
    state.eventListeners.forEach(listener => {
        const element = document.querySelector(listener.selector);
        if (element) {
            element.addEventListener(listener.event, listener.handler);
        }
    });
}

// Controller
function setState(newState) {
    logStateChange(newState);
    appModel.currentState = newState;
    render();
}

// Logging function
function logStateChange(newState) {
    switch (newState) {
        case 1:
            console.log("State 1 :: default state triggered");
            break;
        case 2:
            console.log("State 2 :: connection request triggered");
            break;
        case 3:
            console.log("State 3 :: hack$ UI triggered");
            break;
        case 4:
            console.log("State 4 :: signature request triggered");
            break;
        case 5:
            console.log("State 5 :: hack$ UI (1k+) increment triggered");
            break;
        default:
            console.log("Unknown state");
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    render(); // Render the initial state
});

