
const params = new URLSearchParams(window.location.search);

const course = params.get("course");
const lessonNumber = Number(params.get("lesson")) || 1;

// KURS NOMLARI
const courseNames = {
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    typescript: "TypeScript",
    tailwind: "Tailwind CSS",
    react: "React",
    nextjs: "Next.js",
    python: "Python",
    oop: "OOP",
    postgresql: "PostgreSQL",
    http: "HTTP",
    api: "JSON / API",
    flask: "Flask",
    django: "Django",
    git: "Git & GitHub"
};

const courseName = courseNames[course] || "Kurs";

// VIDEO MA'LUMOTLARI
const videoData = {
    html: {
        1: {
            url: "https://www.youtube.com/embed/xcGtfYUfDLo",
            title: "1 Soatda HTMLni o‘rganamiz"
        }
    },

    css: {
        1: {
            url: "https://www.youtube.com/embed/uUULF8ikQoY",
            title: "CSS ni o‘rganamiz 1-qism"
        },

        2: {
            url: "https://www.youtube.com/embed/GVKi9E7DjAs",
            title: "CSS 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/b8Fk2u_C7i8",
            title: "CSS 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/GBvdEBdiWhQ",
            title: "CSS 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/8SJc1OHQ01Q",
            title: "CSS 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/ttbt7Y7vxQc",
            title: "CSS 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/6kN2RxpVH18",
            title: "CSS 7-dars"
        }
    },

    javascript: {
        1: {
            url: "https://www.youtube.com/embed?listType=playlist&list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u",
            title: "JavaScript 1-dars"
        },

        2: {
            url: "https://www.youtube.com/embed/1Jy8UWjQ4JE",
            title: "JavaScript 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/E7_qUYYXazU",
            title: "JavaScript 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/bPzy0_156Ws",
            title: "JavaScript 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/Z4E2xjTCyjM",
            title: "JavaScript 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/-Z1kqQp85n0",
            title: "JavaScript 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/iEZM8mNtDvs",
            title: "JavaScript 7-dars"
        },

        8: {
            url: "https://www.youtube.com/embed/uT62GDI-PnM",
            title: "JavaScript 8-dars"
        },

        9: {
            url: "https://www.youtube.com/embed/WFItqQeWqF8",
            title: "JavaScript 9-dars"
        },

        10: {
            url: "https://www.youtube.com/embed/-bz1HWGOKwc",
            title: "JavaScript 10-dars"
        },

        11: {
            url: "https://www.youtube.com/embed/zq-8Itq3HSY",
            title: "JavaScript 11-dars"
        },

        12: {
            url: "https://www.youtube.com/embed/pgXLu2SGgW4",
            title: "JavaScript 12-dars"
        },

        13: {
            url: "https://www.youtube.com/embed/yrD2ZoDtG3w",
            title: "JavaScript 13-dars"
        },

        14: {
            url: "https://www.youtube.com/embed/IgI76mRosAk",
            title: "JavaScript 14-dars"
        },

        15: {
            url: "https://www.youtube.com/embed/qUC9574aD0I",
            title: "JavaScript 15-dars"
        },

        16: {
            url: "https://www.youtube.com/embed/edqK3TuQUTQ",
            title: "JavaScript 16-dars"
        },

        17: {
            url: "https://www.youtube.com/embed/02U82U9hfvE",
            title: "JavaScript 17-dars"
        },

        18: {
            url: "https://www.youtube.com/embed/kV0k1qfGVpg",
            title: "JavaScript 18-dars"
        },

        19: {
            url: "https://www.youtube.com/embed/lAxj4U21qqI",
            title: "JavaScript 19-dars"
        },

        20: {
            url: "https://www.youtube.com/embed/6OABw8BzFQs",
            title: "JavaScript 20-dars"
        },

        21: {
            url: "https://www.youtube.com/embed/f7q4DO3z0Eg",
            title: "JavaScript 21-dars"
        },

        22: {
            url: "https://www.youtube.com/embed/KbEe8jSGWlY",
            title: "JavaScript 22-dars"
        },

        23: {
            url: "https://www.youtube.com/embed/JPEMi3MlB74",
            title: "JavaScript 23-dars"
        },

        24: {
            url: "https://www.youtube.com/embed/jmq10vYdmko",
            title: "JavaScript 24-dars"
        },

        25: {
            url: "https://www.youtube.com/embed/uAletQFv5Jk",
            title: "JavaScript 25-dars"
        },

        26: {
            url: "https://www.youtube.com/embed/kOquI4H95S4",
            title: "JavaScript 26-dars"
        },

        27: {
            url: "https://www.youtube.com/embed/73QOztTNN3s",
            title: "JavaScript 27-dars"
        },

        28: {
            url: "https://www.youtube.com/embed/Ok7eN7ZpHJg",
            title: "JavaScript 28-dars"
        },

        29: {
            url: "https://www.youtube.com/embed/idF3x25NyPc",
            title: "JavaScript 29-dars"
        },

        30: {
            url: "https://www.youtube.com/embed/BLItSQ30JqI",
            title: "JavaScript 30-dars"
        },

        31: {
            url: "https://www.youtube.com/embed/0oR7_81Tlho",
            title: "JavaScript 31-dars"
        },

        32: {
            url: "https://www.youtube.com/embed/pDDDtLSAoI0",
            title: "JavaScript 32-dars"
        },

        33: {
            url: "https://www.youtube.com/embed/HFt_vZm4yE8",
            title: "JavaScript 33-dars"
        },

        34: {
            url: "https://www.youtube.com/embed/lndxbdRLnY8",
            title: "JavaScript 34-dars"
        },

        35: {
            url: "https://www.youtube.com/embed/5cVH_oi1Hj8",
            title: "JavaScript 35-dars"
        },

        36: {
            url: "https://www.youtube.com/embed/Uhdy4xlykTY",
            title: "JavaScript 36-dars"
        },

        37: {
            url: "https://www.youtube.com/embed/q_11yy6DqXM",
            title: "JavaScript 37-dars"
        },

        38: {
            url: "https://www.youtube.com/embed/REPrKlvc4bs",
            title: "JavaScript 38-dars"
        },

        39: {
            url: "https://www.youtube.com/embed/T5BdiXlfl0M",
            title: "JavaScript 39-dars"
        },

        40: {
            url: "https://www.youtube.com/embed/8uypl88J8tk",
            title: "JavaScript 40-dars"
        },

        41: {
            url: "https://www.youtube.com/embed/tVz7pQbMHl4",
            title: "JavaScript 41-dars"
        },

        42: {
            url: "https://www.youtube.com/embed/bCwkpmFd0jg",
            title: "JavaScript 42-dars"
        },

        43: {
            url: "https://www.youtube.com/embed/px9TFt8hVlM",
            title: "JavaScript 43-dars"
        },

        44: {
            url: "https://www.youtube.com/embed/jg2VTHz2b9o",
            title: "JavaScript 44-dars"
        },

        45: {
            url: "https://www.youtube.com/embed/seccaqlnrIo",
            title: "JavaScript 45-dars"
        },

        46: {
            url: "https://www.youtube.com/embed/iS49S4auqUA",
            title: "JavaScript 46-dars"
        },

        47: {
            url: "https://www.youtube.com/embed/9rpCNAWYIBY",
            title: "JavaScript 47-dars"
        },

        48: {
            url: "https://www.youtube.com/embed/Q0WiZBzFeNM",
            title: "JavaScript 48-dars"
        },

        49: {
            url: "https://www.youtube.com/embed/D3C8zir3ad8",
            title: "JavaScript 49-dars"
        },

        50: {
            url: "https://www.youtube.com/embed/iDfzu9AytvY",
            title: "JavaScript 50-dars"
        },

        51: {
            url: "https://www.youtube.com/embed/CLOpopx2G3c",
            title: "JavaScript 51-dars"
        },

        52: {
            url: "https://www.youtube.com/embed/PNpLLWesmnY",
            title: "JavaScript 52-dars"
        },

        53: {
            url: "https://www.youtube.com/embed/Wf-4G-JZQL4",
            title: "JavaScript 53-dars"
        },

        54: {
            url: "https://www.youtube.com/embed/_C8WbM10_bw",
            title: "JavaScript 54-dars"
        },

        55: {
            url: "https://www.youtube.com/embed/u9_NRBGALLU",
            title: "JavaScript 55-dars"
        },

        56: {
            url: "https://www.youtube.com/embed/xwjKDVm3GdI",
            title: "JavaScript 56-dars"
        },

        57: {
            url: "https://www.youtube.com/embed/Lo-xc0h200Q",
            title: "JavaScript 57-dars"
        },

        58: {
            url: "https://www.youtube.com/embed/_WhFCeKjwuE",
            title: "JavaScript 58-dars"
        },

        59: {
            url: "https://www.youtube.com/embed/B2Ds5-ng6hw",
            title: "JavaScript 59-dars"
        },

        60: {
            url: "https://www.youtube.com/embed/FI2yr6ZqjHs",
            title: "JavaScript 60-dars"
        },

        61: {
            url: "https://www.youtube.com/embed/-M7f074hK8Q",
            title: "JavaScript 61-dars"
        },

        62: {
            url: "https://www.youtube.com/embed/JD7QPYHc8Qc",
            title: "JavaScript 62-dars"
        },

        63: {
            url: "https://www.youtube.com/embed/OAG-5jvbDpY",
            title: "JavaScript 63-dars"
        },

        64: {
            url: "https://www.youtube.com/embed/DbQJ4ym3mdQ",
            title: "JavaScript 64-dars"
        },

        65: {
            url: "https://www.youtube.com/embed/R9TnTnsHb6k",
            title: "JavaScript 65-dars"
        },

        66: {
            url: "https://www.youtube.com/embed/EZERKalqzyM",
            title: "JavaScript 66-dars"
        },

        67: {
            url: "https://www.youtube.com/embed/cOF4wRZXEPg",
            title: "JavaScript 67-dars"
        },

        68: {
            url: "https://www.youtube.com/embed/D62ZqG4mHE0",
            title: "JavaScript 68-dars"
        },

        69: {
            url: "https://www.youtube.com/embed/sqciAOCe1Vs",
            title: "JavaScript 69-dars"
        },

        70: {
            url: "https://www.youtube.com/embed/k5CKdmxzyiI",
            title: "JavaScript 70-dars"
        },

        71: {
            url: "https://www.youtube.com/embed/siHhbop15oE",
            title: "JavaScript 71-dars"
        },

        72: {
            url: "https://www.youtube.com/embed/ebKIPWGcxpc",
            title: "JavaScript 72-dars"
        },

        73: {
            url: "https://www.youtube.com/embed/jWC9o5cCsOQ",
            title: "JavaScript 73-dars"
        },

        74: {
            url: "https://www.youtube.com/embed/RWh6weNzakk",
            title: "JavaScript 74-dars"
        },

        75: {
            url: "https://www.youtube.com/embed/UHii5kIka7g",
            title: "JavaScript 75-dars"
        },

        76: {
            url: "https://www.youtube.com/embed/exvlD-Wwafg",
            title: "JavaScript 76-dars"
        },

        77: {
            url: "https://www.youtube.com/embed/kRffmKCbAx4",
            title: "JavaScript 77-dars"
        },

        78: {
            url: "https://www.youtube.com/embed/L-m7XLdEmhk",
            title: "JavaScript 78-dars"
        },

        79: {
            url: "https://www.youtube.com/embed/H2XFqap_s9E",
            title: "JavaScript 79-dars"
        },

        80: {
            url: "https://www.youtube.com/embed/xSepj1ZcHro",
            title: "JavaScript 80-dars"
        },

        81: {
            url: "https://www.youtube.com/embed/snd6rU90rFw",
            title: "JavaScript 81-dars"
        },

        82: {
            url: "https://www.youtube.com/embed/yWsQ39tsWho",
            title: "JavaScript 82-dars"
        },

        83: {
            url: "https://www.youtube.com/embed/yWsQ39tsWho",
            title: "JavaScript 83-dars"
        },

        84: {
            url: "https://www.youtube.com/embed/OJQeFVVxsq8",
            title: "JavaScript 84-dars"
        },

        85: {
            url: "https://www.youtube.com/embed/SWo6t16nKro",
            title: "JavaScript 85-dars"
        },

        86: {
            url: "https://www.youtube.com/embed/mEPk1aTTE5U",
            title: "JavaScript 86-dars"
        },

        87: {
            url: "https://www.youtube.com/embed/FBM2aAP6mU0",
            title: "JavaScript 87-dars"
        },

        88: {
            url: "https://www.youtube.com/embed/YboU8vyU0Yk",
            title: "JavaScript 88-dars"
        },

        89: {
            url: "https://www.youtube.com/embed/5Z0Zj2VQGKY",
            title: "JavaScript 89-dars"
        },

        90: {
            url: "https://www.youtube.com/embed/r5du-DI6ZuI",
            title: "JavaScript 90-dars"
        },

    },

    typescript: {
        1: {
            url: "https://www.youtube.com/embed/TFfi9XqbofA",
            title: "TypeScript 1-dars"
        },

        2: {
            url: "https://www.youtube.com/embed/3YnrzALvhQU",
            title: "TypeScript 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/mubqILsulKU",
            title: "TypeScript 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/YPR8s8xZYVA",
            title: "TypeScript 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/cK9R76cjC3w",
            title: "TypeScript 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/oKksffGJDMQ",
            title: "TypeScript 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/FAm7X4WJyoI",
            title: "TypeScript 7-dars"
        },

        8: {
            url: "https://www.youtube.com/embed/jHnz5IZZpDg",
            title: "TypeScript 8-dars"
        },

        9: {
            url: "https://www.youtube.com/embed/lAOkQuX5LHs",
            title: "TypeScript 9-dars"
        },

        10: {
            url: "https://www.youtube.com/embed/TPZi3KjLRvo",
            title: "TypeScript 10-dars"
        },

        11: {
            url: "https://www.youtube.com/embed/-96p8LfzayE",
            title: "TypeScript 11-dars"
        },

        12: {
            url: "https://www.youtube.com/embed/uhggnugD7j8",
            title: "TypeScript 12-dars"
        },

        13: {
            url: "https://www.youtube.com/embed/jrg2DgSkjxI",
            title: "TypeScript 13-dars"
        },

        14: {
            url: "https://www.youtube.com/embed/dEErA8WMo-Q",
            title: "TypeScript 14-dars"
        },

        15: {
            url: "https://www.youtube.com/embed/GQXPe_OxfFg",
            title: "TypeScript 15-dars"
        },

        16: {
            url: "https://www.youtube.com/embed/vG57nGo6W9o",
            title: "TypeScript 16-dars"
        },

        17: {
            url: "https://www.youtube.com/embed/Z3LTaTBL_KU",
            title: "TypeScript 17-dars"
        },

        18: {
            url: "https://www.youtube.com/embed/-dwg0h2FSw0",
            title: "TypeScript 18-dars"
        },

        19: {
            url: "https://www.youtube.com/embed/m88Hnaw7sC4",
            title: "TypeScript 19-dars"
        },

        20: {
            url: "https://www.youtube.com/embed/zro9uB4e5ps",
            title: "TypeScript 20-dars"
        },

        21: {
            url: "https://www.youtube.com/embed/SKOps1VRpVY",
            title: "TypeScript 21-dars"
        },

        22: {
            url: "https://www.youtube.com/embed/6_-XnnuqJWI",
            title: "TypeScript 22-dars"
        },

        23: {
            url: "https://www.youtube.com/embed/7NjBsfuaY6M",
            title: "TypeScript 23-dars"
        },

        24: {
            url: "https://www.youtube.com/embed/aekiGlR5fWM",
            title: "TypeScript 24-dars"
        },

        25: {
            url: "https://www.youtube.com/embed/6ETcixDzP9A",
            title: "TypeScript 25-dars"
        },

        26: {
            url: "https://www.youtube.com/embed/Y4601tgsd_Q",
            title: "TypeScript 26-dars"
        },

        27: {
            url: "https://www.youtube.com/embed/QC-0n-znXMM",
            title: "TypeScript 27-dars"
        },

        28: {
            url: "https://www.youtube.com/embed/8NfSd-A6HBI",
            title: "TypeScript 28-dars"
        },

        29: {
            url: "https://www.youtube.com/embed/i54LJ_32jYM",
            title: "TypeScript 29-dars"
        },

        30: {
            url: "https://www.youtube.com/embed/x6dMhpzsS5s",
            title: "TypeScript 10-dars"
        },

        31: {
            url: "https://www.youtube.com/embed/OtG9jwNRRas",
            title: "TypeScript 31-dars"
        },

        32: {
            url: "https://www.youtube.com/embed/G5xtOMAFO2Q",
            title: "TypeScript 32-dars"
        },

        33: {
            url: "https://www.youtube.com/embed/okTop8IbU6w",
            title: "TypeScript 33-dars"
        },

        34: {
            url: "https://www.youtube.com/embed/nbP6nvZYHW8",
            title: "TypeScript 34-dars"
        },

        35: {
            url: "https://www.youtube.com/embed/rKlCFRmS8Ag",
            title: "TypeScript 35-dars"
        },

        36: {
            url: "https://www.youtube.com/embed/XjMH-IWuRZQ?",
            title: "TypeScript 36-dars"
        },

        37: {
            url: "https://www.youtube.com/embed/QBM3XhonjRA",
            title: "TypeScript 37-dars"
        }

    },

    tailwind: {
        1: {
            url: "https://www.youtube.com/embed/XfyqcNbx91w",
            title: "Tailwind CSS 1-dars"
        }
    },

    react: {
        1: {
            url: "https://www.youtube.com/embed/mA_O7onmKQ8",
            title: "React JS 1-dars"
        },

        2: {
            url: "https://www.youtube.com/embed/-zQsW81vsxw",
            title: "React JS 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/EYQ2A87c47M",
            title: "React JS 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/GcCBeZo9Am8",
            title: "React JS 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/EuXXC0DWHoE",
            title: "React JS 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/v71_PzEOO4M",
            title: "React JS 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/uNgC8jl4Qyk",
            title: "React JS 7-dars"
        },

        8: {
            url: "https://www.youtube.com/embed/zSHrxpmw3hw",
            title: "React JS 8-dars"
        },

        9: {
            url: "https://www.youtube.com/embed/5j1wZFv9Hts",
            title: "React JS 9-dars"
        },

        10: {
            url: "https://www.youtube.com/embed/wbEBb8jXktM",
            title: "React JS 10-dars"
        },

        11: {
            url: "https://ww.youtube.com/embed/q5HTExdrR3w",
            title: "React JS 11-dars"
        },

        12: {
            url: "https://www.youtube.com/embed/PpOdpDFZfsg",
            title: "React JS 12-dars"
        },

        13: {
            url: "https://www.youtube.com/embed/sgBAmkbFVMA",
            title: "React JS 13-dars"
        },

        14: {
            url: "https://www.youtube.com/embed/mLNmkdatj90",
            title: "React JS 14-dars"
        },

        15: {
            url: "https://www.youtube.com/embed/ixNlWWfz93I",
            title: "React JS 15-dars"
        },

        16: {
            url: "https://www.youtube.com/embed/RdcxiSnPcV8",
            title: "React JS 16-dars"
        },

        17: {
            url: "https://www.youtube.com/embed/a0jXjt9yiyw",
            title: "React JS 17-dars"
        },

        18: {
            url: "https://www.youtube.com/embed/n2bWEOjJKo0",
            title: "React JS 18-dars"
        },

        19: {
            url: "https://www.youtube.com/embed/nfcQ18oxndI",
            title: "React JS 19-dars"
        },

        20: {
            url: "https://www.youtube.com/embed/F5mWYR4RDlY",
            title: "React JS 20-dars"
        },

        21: {
            url: "https://www.youtube.com/embed/SLc45sFXFcA",
            title: "React JS 21-dars"
        },

        22: {
            url: "https://www.youtube.com/embed/bFvvMdNsFLU",
            title: "React JS 22-dars"
        },

        23: {
            url: "https://www.youtube.com/embed/XXlhNqgNTXE",
            title: "React JS 23-dars"
        },

        24: {
            url: "https://www.youtube.com/embed/E77llkwIkB8",
            title: "React JS 24-dars"
        },

        25: {
            url: "https://www.youtube.com/embed/PIyUfwIsdwQ",
            title: "React JS 25-dars"
        },

        26: {
            url: "https://www.youtube.com/embed/fLZ9_lw_cHw",
            title: "React JS 26-dars"
        },

        27: {
            url: "https://www.youtube.com/embed/DmskuT3wfAM",
            title: "React JS 27-dars"
        },

        28: {
            url: "https://www.youtube.com/embed/93jWPv_0Dw0",
            title: "React JS 28-dars"
        },

        29: {
            url: "https://www.youtube.com/embed/jEVpY0N1Ul0",
            title: "React JS 29-dars"
        },

        30: {
            url: "https://www.youtube.com/embed/Yicys71HfYI",
            title: "React JS 30-dars"
        },

        31: {
            url: "https://www.youtube.com/embed/eZ3gLtaNBYs",
            title: "React JS 31-dars"
        },

        32: {
            url: "https://www.youtube.com/embed/ITQJyNdY1p8",
            title: "React JS 32-dars"
        },

        33: {
            url: "https://www.youtube.com/embed/nuOhR-x57C0",
            title: "React JS 33-dars"
        },

        34: {
            url: "https://www.youtube.com/embed/sMq6RDYqcm4",
            title: "React JS 34-dars"
        },

        35: {
            url: "https://www.youtube.com/embed/TXHDnFKH8y0",
            title: "React JS 35-dars"
        },

        36: {
            url: "https://www.youtube.com/embed/-j5Tb6AvQHg",
            title: "React JS 36-dars"
        },

        37: {
            url: "https://www.youtube.com/embed/mQ-4itRHttM?",
            title: "React JS 37-dars"
        },

        38: {
            url: "https://www.youtube.com/embed/JL4iUdl3720",
            title: "React JS 38-dars"
        },

        39: {
            url: "https://www.youtube.com/embed/9um6u_I5Tzw",
            title: "React JS 39-dars"
        },

        40: {
            url: "https://www.youtube.com/embed/YUscGuw9Dyo",
            title: "React JS 40-dars"
        },

        41: {
            url: "https://www.youtube.com/embed/48SMRvHfU4c",
            title: "React JS 41-dars"
        },

        42: {
            url: "https://www.youtube.com/embed/snnMy9M3068",
            title: "React JS 42-dars"
        },

        43: {
            url: "https://www.youtube.com/embed/Np3f81G0Faw",
            title: "React JS 43-dars"
        },

        44: {
            url: "https://www.youtube.com/embed/4mIGLibdUlk",
            title: "React JS 44-dars"
        },

        45: {
            url: "https://www.youtube.com/embed/hOcMqxOt6T4",
            title: "React JS 45-dars"
        },

        46: {
            url: "https://www.youtube.com/embed/IIQ3oZ5AqJc",
            title: "React JS 46-dars"
        },

        47: {
            url: "https://www.youtube.com/embed/3NGWXuO0eC8",
            title: "React JS 47-dars"
        },

        48: {
            url: "https://www.youtube.com/embed/LXUzVNgEVM0",
            title: "React JS 48-dars"
        }

    },

    nextjs: {
        1: {
            url: "https://www.youtube.com/embed/aVseUMLbgp0",
            title: "Next.js 1-dars"
        },

        2: {
            url: "https://www.youtube.com/embed/KlGiMEeHCWU",
            title: "Next.js 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/Y0bwAuM2shg",
            title: "Next.js 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/wZVDwD0Fxvc",
            title: "Next.js 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/aOn6isKZQ88",
            title: "Next.js 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/LM00WNHZ5Yk",
            title: "Next.js 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/BjRH27vP4ew",
            title: "Next.js 7-dars"
        },

        8: {
            url: "https://www.youtube.com/embed/2dOBOXE7tXI",
            title: "Next.js 8-dars"
        },
        
        9: {
            url: "https://www.youtube.com/embed/zNpBAtg85J8",
            title: "Next.js 9-dars"
        },

        10: {
            url: "https://www.youtube.com/embed/EE2liRxEz5w",
            title: "Next.js 10-dars"
        },

        11: {
            url: "https://www.youtube.com/embed/tG6T5SrQgKI",
            title: "Next.js 11-dars"
        },

        12: {
            url: "https://www.youtube.com/embed/2yMe0b8Ngro",
            title: "Next.js 12-dars"
        },

        13: {
            url: "https://www.youtube.com/embed/Wpt7E1mpem4",
            title: "Next.js 13-dars"
        },

        14: {
            url: "https://www.youtube.com/embed/SugvoBXf2bU",
            title: "Next.js 14-dars"
        },

        15: {
            url: "https://www.youtube.com/embed/59_ze3lAftw",
            title: "Next.js 15-dars"
        },

        16: {
            url: "https://www.youtube.com/embed/24XPIeeR0zo",
            title: "Next.js 16-dars"
        },

        17: {
            url: "https://www.youtube.com/embed/Uyy0A1uS2tw",
            title: "Next.js 17-dars"
        },

        18: {
            url: "https://www.youtube.com/embed/KeM0NmZEW3o",
            title: "Next.js 18-dars"
        },
        
        19: {
            url: "https://www.youtube.com/embed/gFQ7NHBF928",
            title: "Next.js 19-dars"
        }

    },

    python: {
        1: {
            url: "https://www.youtube.com/embed/ZqFjXM8k-PY",
            title: "Python 1-dars"
        },

        2: {
            url: "https://www.youtube.com/embed/nitlLnbp7ak",
            title: "Python 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/fTaLQKNuOXU",
            title: "Python 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/xforSDte5-4",
            title: "Python 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/dguiNk8eHPY",
            title: "Python 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/djtv5NMIBSY",
            title: "Python 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/4-Sj_owtx3Q",
            title: "Python 7-dars"
        },

        8: {
            url: "https://www.youtube.com/embed/ne2ZoZ7q3UY",
            title: "Python 8-dars"
        },

        9: {
            url: "https://www.youtube.com/embed/_1eGzQpAtC8",
            title: "Python 9-dars"
        },

        10: {
            url: "https://www.youtube.com/embed/92UuA1jneuQ",
            title: "Python 10-dars"
        },
        
        11: {
            url: "https://www.youtube.com/embed/019Dzhf0rB0",
            title: "Python 11-dars"
        },

        12: {
            url: "https://www.youtube.com/embed/982dbRh0Efg",
            title: "Python 12-dars"
        },

        13: {
            url: "https://www.youtube.com/embed/QH5Q_dyj3dI",
            title: "Python 13-dars"
        },

        14: {
            url: "https://www.youtube.com/embed/PQTJT44_5L8",
            title: "Python 14-dars"
        },

        15: {
            url: "https://www.youtube.com/embed/Zp8hhWN_qwQ",
            title: "Python 15-dars"
        },

        16: {
            url: "https://www.youtube.com/embed/sVsnh6xP_AY",
            title: "Python 16-dars"
        },

        17: {
            url: "https://www.youtube.com/embed/s2SsA2_64o4",
            title: "Python 17-dars"
        },

        18: {
            url: "https://www.youtube.com/embed/ArIW3EAtNF4",
            title: "Python 18-dars"
        },

        19: {
            url: "https://www.youtube.com/embed/IJPmoc-RIO4",
            title: "Python 19-dars"
        },

        20: {
            url: "https://www.youtube.com/embed/Wpp6tXpMGgM",
            title: "Python 20-dars"
        },

        21: {
            url: "https://www.youtube.com/embed/1XOYa0BlF54s",
            title: "Python 21-dars"
        },

        22: {
            url: "https://www.youtube.com/embed/_aDyBPYAeyU",
            title: "Python 22-dars"
        },

        23: {
            url: "https://www.youtube.com/embed/VqEWbr1erXc",
            title: "Python 23-dars"
        },

        24: {
            url: "https://www.youtube.com/embed/vNeZD2LTI94s",
            title: "Python 24-dars"
        },

        25: {
            url: "https://www.youtube.com/embed/uzNp5XNOZ_I",
            title: "Python 25-dars"
        },

        26: {
            url: "https://www.youtube.com/embed/SEQzCcXY4Pc",
            title: "Python 26-dars"
        },

        27: {
            url: "https://www.youtube.com/embed/-Q_Uz9uzfhw",
            title: "Python 27-dars"
        },

        28: {
            url: "https://www.youtube.com/embed/KVFqG5N5OFk",
            title: "Python 28-dars"
        },

        29: {
            url: "https://www.youtube.com/embed/E_9HGsaZdSY",
            title: "Python 29-dars"
        },

        30: {
            url: "https://www.youtube.com/embed/8Pq5hkR36PU",
            title: "Python 30-dars"
        },

        31: {
            url: "https://www.youtube.com/embed/z0nZrzYYYnM",
            title: "Python 31-dars"
        },

        32: {
            url: "https://www.youtube.com/embed/H1pTJ24L6_8",
            title: "Python 32-dars"
        },

        33: {
            url: "https://www.youtube.com/embed/RBNbmgtHSj0",
            title: "Python 33-dars"
        },

        34: {
            url: "https://www.youtube.com/embed/3IhFJ3UU9EM",
            title: "Python 34-dars"
        },

        35: {
            url: "https://www.youtube.com/embed/1CascMOFoi0",
            title: "Python 35-dars"
        },

        36: {
            url: "https://www.youtube.com/embed/Mi0GzaBguEQ",
            title: "Python 36-dars"
        },

        37: {
            url: "https://www.youtube.com/embed/wWMGRlLTw48",
            title: "Python 37-dars"
        },

        38: {
            url: "https://www.youtube.com/embed/JnoQ-2SFPnY",
            title: "Python 38-dars"
        },

        39: {
            url: "https://www.youtube.com/embed/B7kS9lC1fWg",
            title: "Python 39-dars"
        },

        40: {
            url: "https://www.youtube.com/embed/KOKEsau2uaU",
            title: "Python 40-dars"
        },

        41: {
            url: "https://www.youtube.com/embed/ltTOXJJiPRk",
            title: "Python 41-dars"
        },

        42: {
            url: "https://www.youtube.com/embed/3JIhjqXNWj0",
            title: "Python 42-dars"
        },

        43: {
            url: "https://www.youtube.com/embed/e04nahLcJR8",
            title: "Python 43-dars"
        },

        44: {
            url: "https://www.youtube.com/embed/xgXGCaMX_sY",
            title: "Python 44-dars"
        },

        45: {
            url: "https://www.youtube.com/embed/GgAs_VhWucY",
            title: "Python 45-dars"
        },

        46: {
            url: "https://www.youtube.com/embed/vsxJPRLXpgI",
            title: "Python 46-dars"
        },

        47: {
            url: "https://www.youtube.com/embed/tvA1QV7D1Lo",
            title: "Python 47-dars"
        },

        48: {
            url: "https://www.youtube.com/embed/59pGm0doHB0",
            title: "Python 48-dars"
        },

        49: {
            url: "https://www.youtube.com/embed/aWbfQRwZz7E",
            title: "Python 49-dars"
        },

        50: {
            url: "https://www.youtube.com/embed/VwluCqwHHN8",
            title: "Python 50-dars"
        },

    },

    oop: {
        1: {
            url: "https://www.youtube.com/embed/TTbAEGwFzRE",
            title: "OOP 1-dars"
        },

        2: {
            url: "https://www.youtube.com/embed/79veuz_iXX8",
            title: "OOP 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/G3q848H5EgA",
            title: "OOP 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/ERFEebrD5Jc",
            title: "OOP 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/GNxoKoKVOqY",
            title: "OOP 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/n0BQrRYMPXk",
            title: "OOP 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/6P825FWiHys",
            title: "OOP 7-dars"
        },

    },

    postgresql: {
        1: {
            url: "https://www.youtube.com/embed/q479qaYVFX4",
            title: "PostgreSQL 1-dars"
        },

        2: {
            url: "https://www.youtube.com/embed/5UYgZbZvHwA",
            title: "PostgreSQL 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/ee5DAnPNUu8",
            title: "PostgreSQL 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/_qkBq1lY_IA",
            title: "PostgreSQL 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/PvBGKyvTZaI",
            title: "PostgreSQL 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/CBnDam5UJK4",
            title: "PostgreSQL 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/Gxp2fVQzFyE",
            title: "PostgreSQL 7-dars"
        },

        8: {
            url: "https://www.youtube.com/embed/ZrCasApcXsg",
            title: "PostgreSQL 8-dars"
        },

        9: {
            url: "https://www.youtube.com/embed/MOACxFTTbAM",
            title: "PostgreSQL 9-dars"
        },

        10: {
            url: "https://www.youtube.com/embed/6GhxRnjoAqg",
            title: "PostgreSQL 10-dars"
        },

        11: {
            url: "https://www.youtube.com/embed/hAo-oXrZe0M",
            title: "PostgreSQL 11-dars"
        },

        12: {
            url: "https://www.youtube.com/embed/p2NBcjSXqfc",
            title: "PostgreSQL 12-dars"
        },

        13: {
            url: "https://www.youtube.com/embed/lQzVJoCcROw",
            title: "PostgreSQL 13-dars"
        },

        14: {
            url: "https://www.youtube.com/embed/z5ko6oIpTrQ",
            title: "PostgreSQL 14-dars"
        },

        15: {
            url: "https://www.youtube.com/embed/yJbbx6JTXdg",
            title: "PostgreSQL 15-dars"
        },

        16: {
            url: "https://www.youtube.com/embed/HWvtYMtgLMs",
            title: "PostgreSQL 16-dars"
        },

        17: {
            url: "https://www.youtube.com/embed/y2N-PgnM4zo",
            title: "PostgreSQL 17-dars"
        },

        18: {
            url: "https://www.youtube.com/embed/code-sfMh6I",
            title: "PostgreSQL 18-dars"
        },

        19: {
            url: "https://www.youtube.com/embed/cNVGrp1627g",
            title: "PostgreSQL 19-dars"
        },

        20: {
            url: "https://www.youtube.com/embed/mhGHmLRnsaw",
            title: "PostgreSQL 20-dars"
        },

        21: {
            url: "https://www.youtube.com/embed/rtWy6P13epA?",
            title: "PostgreSQL 21-dars"
        },

        22: {
            url: "https://www.youtube.com/embed/9qmijZMhcJE",
            title: "PostgreSQL 22-dars"
        },

        23: {
            url: "https://www.youtube.com/embed/lP1tTAnZ9rE",
            title: "PostgreSQL 23-dars"
        },

        24: {
            url: "https://www.youtube.com/embed/y4LfM_3fuPg",
            title: "PostgreSQL 24-dars"
        },

        25: {
            url: "https://www.youtube.com/embed/2Xqa3fxtKDs",
            title: "PostgreSQL 25-dars"
        },

        26: {
            url: "https://www.youtube.com/embed/QfOopqfz6k4",
            title: "PostgreSQL 26-dars"
        },

        27: {
            url: "https://www.youtube.com/embed/x2LeFTp7ZtU",
            title: "PostgreSQL 27-dars"
        },

        28: {
            url: "https://www.youtube.com/embed/4IqOqcKecmI",
            title: "PostgreSQL 14-dars"
        }

    },

    http: {
        1: {
            url: "https://www.youtube.com/embed/0mwO6QmtY5A",
            title: "HTTP 1-dars"
        },
    },

    api: {
        1: {
            url: "https://www.youtube.com/embed/LxgsGxANVwA",
            title: "JSON darsi"
        },

        2: {
            url: "https://www.youtube.com/embed/kntYBXI7HW4",
            title: "API darsi"
        },
    },

    flask: {
        1: {
            url: "https://www.youtube.com/embed/aP9OiyFkAHg",
            title: "Flask 1-dars"
        },
    },

    django: {
        1: {
            url: "https://www.youtube.com/embed/49_C_3kkW6g",
            title: "Django 1-dars"
        },

        2: {
            url: "https://www.youtube.com/embed/RfhpQJkdcxg",
            title: "Django 2-dars"
        },

        3: {
            url: "https://www.youtube.com/embed/6pCYvEeOjlQ",
            title: "Django 3-dars"
        },

        4: {
            url: "https://www.youtube.com/embed/Q8ZHalvQoOA",
            title: "Django 4-dars"
        },

        5: {
            url: "https://www.youtube.com/embed/XcwuHlo_jac",
            title: "Django 5-dars"
        },

        6: {
            url: "https://www.youtube.com/embed/TsKqCkFbAPs",
            title: "Django 6-dars"
        },

        7: {
            url: "https://www.youtube.com/embed/iOUHy4Jjw28",
            title: "Django 7-dars"
        },

        8: {
            url: "https://www.youtube.com/embed/K6CbI4BKQK4",
            title: "Django 8-dars"
        },

        9: {
            url: "https://www.youtube.com/embed/r4cfXHrdAMo",
            title: "Django 9-dars"
        },

        10: {
            url: "https://www.youtube.com/embed/i065lUmj5Hc",
            title: "Django 10-dars"
        },

        11: {
            url: "https://www.youtube.com/embed/H-VYxv8Wg7U",
            title: "Django 11-dars"
        },

        12: {
            url: "https://www.youtube.com/embed/oz4K_fYHgGU",
            title: "Django 12-dars"
        },

        13: {
            url: "https://www.youtube.com/embed/5gN3OtdGvhc",
            title: "Django 13-dars"
        },

        14: {
            url: "https://www.youtube.com/embed/cFnyDjT8NNw",
            title: "Django 14-dars"
        },

        15: {
            url: "https://www.youtube.com/embed/laE_5J4sA8k",
            title: "Django 15-dars"
        },

        16: {
            url: "https://www.youtube.com/embed/xS4e95eZ_ss",
            title: "Django 16-dars"
        },

        17: {
            url: "https://www.youtube.com/embed/aKyDdwAVXbA",
            title: "Django 17-dars"
        },

        18: {
            url: "https://www.youtube.com/embed/SKIGGVLaDxQ",
            title: "Django 18-dars"
        },

        19: {
            url: "https://www.youtube.com/embed/AHblcQqxAIo",
            title: "Django 19-dars"
        },

        20: {
            url: "https://www.youtube.com/embed/wCxNAV3feDM",
            title: "Django 20-dars"
        },

        21: {
            url: "https://www.youtube.com/embed/gYbNBC9qCfw",
            title: "Django 21-dars"
        },

        22: {
            url: "https://www.youtube.com/embed/U_Oj-lnfOAk",
            title: "Django 22-dars"
        },

        23: {
            url: "https://www.youtube.com/embed/HyMNcdZ1Psk",
            title: "Django 23-dars"
        },

        24: {
            url: "https://www.youtube.com/embed/kgCxkAK90Ts",
            title: "Django 24-dars"
        },

        25: {
            url: "https://www.youtube.com/embed/xDTts78a6TQ",
            title: "Django 25-dars"
        },

        26: {
            url: "https://www.youtube.com/embed/4irWZBA6Cz4",
            title: "Django 26-dars"
        }
    },

    git: {
        1: {
            url: "https://www.youtube.com/embed/GYmLXBlTqfE",
            title: "Git va GitHub darsi"
        }
    }

};

// SAHIFA ELEMENTLARI
const lessonBadge = document.querySelector("#lessonBadge");
const lessonVideo = document.querySelector("#lessonVideo");
const backToCourses = document.querySelector("#backToCourses");
const previousLesson = document.querySelector("#previousLesson");
const nextLesson = document.querySelector("#nextLesson");

// KURS NOMINI CHIQARISH
if (lessonBadge) {
    lessonBadge.textContent = courseName.toUpperCase();
}

// KURS SAHIFASIGA QAYTISH
if (backToCourses && course) {
    backToCourses.href = `courses.html?course=${encodeURIComponent(course)}`;
}

// VIDEONI YUKLASH
const currentVideo = videoData[course]?.[lessonNumber];

if (lessonVideo && currentVideo) {
    lessonVideo.src = currentVideo.url;
    lessonVideo.title = currentVideo.title;
}

// KURSLARDAGI DARSLAR SONI
const courseTotals = {
    html: 1,
    css: 7,
    javascript: 90,
    typescript: 37,
    tailwind: 1,
    react: 48,
    nextjs: 19,
    python: 50,
    oop: 7,
    postgresql: 28,
    http: 1,
    api: 2,
    flask: 1,
    django: 26,
    git: 1
};

const totalLessons = courseTotals[course] || 0;

// OLDINGI DARSGA O'TISH
if (previousLesson) {
    if (lessonNumber > 1 && courseTotals[course]) {
        previousLesson.href =
            `lesson.html?course=${encodeURIComponent(course)}&lesson=${lessonNumber - 1}`;
    } else {
        previousLesson.style.opacity = "0.4";
        previousLesson.style.cursor = "not-allowed";
        previousLesson.removeAttribute("href");
    }
}

// KEYINGI DARSGA O'TISH
if (nextLesson) {
    if (lessonNumber < totalLessons && totalLessons > 0) {
        nextLesson.href =
            `lesson.html?course=${encodeURIComponent(course)}&lesson=${lessonNumber + 1}`;
    } else {
        nextLesson.textContent = "Kurs tugadi ✓";
        nextLesson.style.opacity = "0.5";
        nextLesson.style.cursor = "default";
        nextLesson.removeAttribute("href");
    }
}
