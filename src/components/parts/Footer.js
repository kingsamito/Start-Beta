import React from "react"
import SchoolIcon from "@mui/icons-material/School"
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark"
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd"
import ImportContactsIcon from "@mui/icons-material/ImportContacts"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-icon-text">
                <SchoolIcon className="school-icon"/>
                <div>
                    <span>3,000+</span>
                    <span>Graduate</span>
                </div>
            </div>
            <div className="footer-icon-text">
                <SchoolIcon className="school-icon fo"/>
                <CollectionsBookmarkIcon className="school-icon f3"/>
                <ImportContactsIcon className="school-icon f4"/>
                <div>
                    <span>50+</span>
                    <span>Courses</span>
                </div>
            </div>
            <div className="footer-icon-text fo">
                <SchoolIcon className="school-icon fo"/>
                <CollectionsBookmarkIcon className="school-icon f3"/>
                <div>
                    <span>95%</span>
                    <span>Course completion</span>
                </div>
            </div>
            <div className="footer-icon-text">
                <SchoolIcon className="school-icon fo"/>
                <AssignmentIndIcon className="school-icon f4 f3"/>
                <div>
                    <span>100+</span>
                    <span>Teachers</span>
                </div>
            </div>

        </div>
    )
}