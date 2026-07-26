import certificates from "./certificates-data.json";
import {Certificate, CertificateDetail} from "./certificate"; 
import { t } from "i18next";

const certificateFactory = (certificates: CertificateDetail[]) => {
  const certificateValues = Object.keys(Certificate);

  const result = new Map<string, CertificateDetail>();
  for (let i = 0; i < certificates.length; i++) {
    result.set(certificateValues[i], certificates[i]);
  }

  return result;
}

const certificateContent = certificateFactory(certificates);

export const getTranslatedCertificateNames = (...certificates: Certificate[]) => {
  return certificates.map(certificate => t(certificateContent.get(certificate.toString())!.id));
};
