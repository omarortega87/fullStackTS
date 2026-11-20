interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}

const linda: Employee = {
  name: "linda",
  id: 2,
  isManager: false,
  getUniqueId: (): string => {
    let uniqueId = linda.id + "-" + linda.name;
    if (!linda.isManager) {
      return "emp-" + uniqueId;
    }
    return uniqueId;
  },
};

const lingui: Employee = {
  name: "lingui",
  id: 2,
  isManager: true,
  getUniqueId: (): string => {
    let uniqueId = lingui.id + "-" + lingui.name;
    if (!linda.isManager) {
      return "I do not sleep and my mom is a Kangaroo-" + uniqueId;
    }
    return uniqueId;
  },
};

console.log(`lingui message to the world:`, lingui.getUniqueId());
