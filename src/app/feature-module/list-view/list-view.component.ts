import { Component } from '@angular/core';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss']
})
export class HelpDeskListViewComponent {
    sampleData = [
        { id: '1', title: 'Bug 1', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'New' },
        { id: '2', title: 'Bug 2', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'In progress' },
        { id: '3', title: 'Bug 3', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Reopen' },
        { id: '4', title: 'Bug 4', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Duplicated' },
        { id: '5', title: 'Bug 5', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Fixed' },
        { id: '6', title: 'Bug 1', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'New' },
        { id: '7', title: 'Bug 2', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'In progress' },
        { id: '8', title: 'Bug 3', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Reopen' },
        { id: '9', title: 'Bug 4', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Duplicated' },
        { id: '10', title: 'Bug 5', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Fixed' },
        { id: '11', title: 'Bug 1', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'New' },
        { id: '12', title: 'Bug 2', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'In progress' },
        { id: '13', title: 'Bug 3', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Reopen' },
        { id: '14', title: 'Bug 4', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Duplicated' },
        { id: '15', title: 'Bug 5', createdData: '04/15/2020', lasUpdate: '04/16/2020', status: 'Fixed' },
    ];
}