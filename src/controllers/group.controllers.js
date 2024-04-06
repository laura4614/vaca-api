import { getAllGroupsService, createGroupService, updateGroupService, deleteGroupService } from '../services/group.service.js'; 

export const getGroups = async (req, res) => {
    const groups = await getAllGroupsService();
    res.json(groups);
};

export const createGroup = async (req, res) => {
    const group = await createGroupService(req.body);
    res.status(201).json(group);
};

export const updateGroup = async (req, res) => {
    const { id } = req.params;
    const updatedGroup = await updateGroupService(id, req.body);
    res.json(updatedGroup);
};

export const deleteGroup = async (req, res) => {
    const { id } = req.params;
    await deleteGroupService(id);
    res.status(204).send();
};