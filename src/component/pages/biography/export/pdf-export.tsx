import React from "react";
import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import jobContent from "../content/job";
import { t } from "i18next";
import { TextLinkProvider } from "../content/text-link-provider";
import { myProfileContent } from "../content/profile/profile-factory";

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: "Times-Roman"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 28,
    color: "#2A5CAA",
    fontWeight: "bold",
    marginBottom: 8
  },
  contactText: {
    fontSize: 12,
    marginBottom: 2
  },
  email: {
    color: "#0573c4",
    fontSize: 12
  },
  github: {
    color: "#0573c4",
    fontSize: 12,
    marginBottom: 10
  },
  photo: {
    width: 120,
    height: 140,
    objectFit: "cover",
    marginLeft: 24
  },
  sectionTitle: {
    fontSize: 16,
    color: "#2A5CAA",
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 6,
    borderBottom: "2 solid #2A5CAA",
    paddingBottom: 4
  },
  table: {
    // display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    fontSize: 12
  },
  tableRow: { flexDirection: "row" },
  tableColDate: {
    width: "18%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    fontSize: 11,
    backgroundColor: "#f6f6f6"
  },
  tableColContent: {
    width: "82%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    fontSize: 11
  },
  jobTitle: {
    fontWeight: "bold"
  },
  jobList: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 11
  }
});

export const BiographyExport = () => {
  return (
    <Document>
      <Page size="A4" style={ styles.page }>
        {/* Header */ }
        <View style={ styles.header }>
          <View style={ styles.info }>
            <Text style={ styles.name }>Jozsef Csurgai</Text>
            <Text style={ styles.contactText }>
              Geburtsort: { TextLinkProvider.load(myProfileContent.birth.cities) }
            </Text>
            <Text style={ styles.contactText }>
              Geburtsdatum: 18.02.1992
            </Text>
            <Text style={ styles.contactText }>
              Wohnort: Braunschweig
            </Text>
            <Text style={ styles.contactText }>
              Telefon: +36 30 499 1514
            </Text>
            <Text style={ styles.contactText }>
              E-Mail: <Text style={ styles.email }>mcsurgai@gmail.com</Text>
            </Text>
            <Text style={ styles.contactText }>
              GitHub:{ " " }
              <Link src="https://github.com/mjoe92" style={ styles.github }>
                https://github.com/mjoe92
              </Link>
            </Text>
          </View>
          {/*<Image*/ }
          {/*  src={PROFILE_PHOTO}*/ }
          {/*  style={styles.photo}*/ }
          {/*/>*/ }
        </View>

        {/* Section: Experience */ }
        <Text style={ styles.sectionTitle }>
          Einschlägige Berufserfahrungen:
        </Text>
        <View style={ styles.table }>
          { jobContent(t).map((job, idx) => (
            <View style={ styles.tableRow } key={ idx }>
              <View style={ styles.tableColDate }>
                <Text>{ job.placePeriods.toString() }</Text>
              </View>
              <View style={ styles.tableColContent }>
                <Text style={ styles.jobTitle }>{ job.titles }</Text>
                {/*{ job.details.length > 0 && (*/ }
                {/*  <View style={ styles.jobList }>*/ }
                {/*    { job.details.map((line, i) => (*/ }
                {/*      <Text key={ i }>– { line }</Text>*/ }
                {/*    )) }*/ }
                {/*  </View>*/ }
                {/*) }*/ }
              </View>
            </View>
          )) }
        </View>
      </Page>
    </Document>
  );
};