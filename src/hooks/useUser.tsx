import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerUser, loginUser, updateUser, deleteUser } from '../api/userApi';

export const useRegisterUser = () => useMutation(registerUser);
export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation(loginUser, {
    onSuccess: (data) => {
      sessionStorage.setItem('user', JSON.stringify(data));
      queryClient.invalidateQueries(['user']);
    },
  });
};
export const useUpdateUser = (userId: number) => useMutation((data) => updateUser(userId, data));
export const useDeleteUser = (userId: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteUser(userId), {
    onSuccess: () => {
      sessionStorage.removeItem('user');
      queryClient.invalidateQueries(['user']);
    },
  });
};
