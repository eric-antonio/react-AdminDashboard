import CustomAvatar from "@/Components/custom-avatar";
import { UPDATE_COMPANY_MUTATION } from "@/graphql/mutations";
import { UsersSelectQuery } from "@/graphql/types";
import { getNameInitials } from "@/utilities";
import { Edit } from "@refinedev/antd";
import { useForm } from "@refinedev/core";
import { useSelect } from "@refinedev/antd";
import { GetFieldsFromList } from "@refinedev/nestjs-query";
import { Row, Col, Form, Select } from "antd";
import { USERS_SELECT_QUERY } from "@/graphql/queries";
import SelectOptionWithAvatar from "@/Components/select-option-withAvatar";

const EditCompany = () => {
  const { saveButtonProps, formProps, formLoading, queryResult } = useForm({
    redirect: false,
    meta: {
      gqlMutation: UPDATE_COMPANY_MUTATION,
    },
  });
  const { avatarUrl, name } = queryResult?.data?.data || {};

  const { selectProps, queryResult: queryResultUsers } = useSelect<
    GetFieldsFromList<UsersSelectQuery>
  >({
    resource: "users",
    optionLabel: "name",
    meta: {
      gqlQuery: USERS_SELECT_QUERY,
    },
  });

  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col xs={32} xl={12}>
          <Edit
            isLoading={formLoading}
            saveButtonProps={saveButtonProps}
            breadcrumb={false}
          >
            <Form {...formProps} layout="vertical">
              <CustomAvatar
                shape="square"
                src={avatarUrl}
                name={getNameInitials(name || "")}
                style={{ marginBottom: '24px', width: 96, height: 96 }}
              />
               <Form.Item
            label="Sales Owner"
            name="salesOwnerId" // Corrected field name
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Please select a sales owner"
              {...selectProps}
              options={queryResultUsers.data?.data.map((user) => ({
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
          </Edit>
        </Col>
      </Row>
    </div>
  );
};

export default EditCompany;
