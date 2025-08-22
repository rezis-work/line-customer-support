import { OrganizationList } from "@clerk/nextjs";

export function OrgSelectView() {
  return (
    <OrganizationList
      afterCreateOrganizationUrl={"/"}
      afterSelectOrganizationUrl={"/"}
      hidePersonal={true}
      skipInvitationScreen={true}
    />
  );
}
