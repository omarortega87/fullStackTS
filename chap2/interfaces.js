"use strict";
const linda = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: () => {
        let uniqueId = linda.id + "-" + linda.name;
        if (!linda.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    },
};
const lingui = {
    name: "lingui",
    id: 2,
    isManager: true,
    getUniqueId: () => {
        let uniqueId = lingui.id + "-" + lingui.name;
        if (!linda.isManager) {
            return "I do not sleep and my mom is a Kangaroo-" + uniqueId;
        }
        return uniqueId;
    },
};
console.log(`lingui message to the world:`, lingui.getUniqueId());
