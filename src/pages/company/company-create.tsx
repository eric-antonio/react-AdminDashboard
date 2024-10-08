import React, { act } from "react";
import { CompanyList } from "./company-list";
import { Button, Form, Input, Modal, Select } from "antd";
import { useModalForm } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import { useSelect } from "@refinedev/antd";
import { CREATE_COMPANY_MUTATION } from "@/graphql/mutations";
import { USERS_SELECT_QUERY } from "@/graphql/queries";
import SelectOptionWithAvatar from "@/Components/select-option-withAvatar";
import { GetFields, GetFieldsFromList } from "@refinedev/nestjs-query";
import { UsersSelectQuery } from "@/graphql/types";

export const Create = () => {
  const go = useGo();
  const goToListPage = () => {
    go({
      to: { resource: "companies", action: "list" },
      options: { keepQuery: true },
      type: "replace",
    });
  };

  const { selectProps, queryResult } = useSelect<GetFieldsFromList<UsersSelectQuery>>({
    resource: "users",
    optionLabel: "name",
    meta: {
      gqlQuery: USERS_SELECT_QUERY,
    },
  });

  const { formProps, modalProps } = useModalForm({
    action: "create",
    defaultVisible: true,
    resource: "companies",
    redirect: false,
    mutationMode: "pessimistic",
    onMutationSuccess: goToListPage,
    meta: {
      gqlMutation: CREATE_COMPANY_MUTATION,
    },
  });

  return (
    <CompanyList>
      <Modal {...modalProps} mask={true} title="Create Company" width={512}>
        <Form {...formProps} layout="vertical">
          <Form.Item
            label="Company Name"
            name="name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Please enter a Company Name" />
          </Form.Item>
          
          <Form.Item
            label="Sales Owner"
            name="salesOwnerId" // Corrected field name
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Please select a sales owner"
              {...selectProps}
              options={queryResult.data?.data.map((user) => ({
                value: user.id, // Ensure this matches the expected ID type
                label: (
                  <SelectOptionWithAvatar
                    name={user.name}
                    avatarUrl={user.avatarUrl ?? undefined}
                    shape={"circle"}
                  />
                ),
              })) ?? []}
            />
          </Form.Item>
        </Form>
      </Modal>
    </CompanyList>
  );
};
