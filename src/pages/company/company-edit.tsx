import CustomAvatar from "@/Components/custom-avatar";
import { UPDATE_COMPANY_MUTATION } from "@/graphql/mutations";
import { getNameInitials } from "@/utilities";
import { Edit } from "@refinedev/antd";
import { useForm } from "@refinedev/core";
import { Row, Col, Form } from "antd";

const EditCompany = () => {
  const { saveButtonProps, formProps, formLoading, queryResult } = useForm({
    redirect: false,
    meta: {
      gqlMutation: UPDATE_COMPANY_MUTATION,
    },
  });
  const { avatarUrl, name } = queryResult?.data?.data || {};
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
                style={{ marginBottom: 24, width: 96, height: 96 }}
              />
            </Form>
          </Edit>
        </Col>
      </Row>
    </div>
  );
};

export default EditCompany;
