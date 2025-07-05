/** @format */

const createIdGenerator = () => {
    let currentId = 1;
    return () => currentId++;
};

export const getNextId = createIdGenerator();
