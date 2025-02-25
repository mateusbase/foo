import DataProtectionScreen from "@/templates/DataProtectionScreen";
import Page from "@/components/Page";

const DataProtection = (): JSX.Element => {
  return (
    <Page
      title="Proteção de Dados"
      description="Todas as práticas de tratamento de dados pessoais realizadas pela Oncoclínicas respeitam à Lei 13.709/2018 (“Lei Geral de Proteção de Dados Pessoais” ou “LGPD”)."
    >
      <DataProtectionScreen />
    </Page>
  );
};

export default DataProtection;
